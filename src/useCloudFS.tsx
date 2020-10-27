import { fsFile_T, fsFolderData_T, fsFolder_T, useCloudFSController_T } from './useCloudFSTypes'


const useCloudFS = <GenericUser_T, SignInOptions_T>(rootDir: string, useCloudFSController: useCloudFSController_T<GenericUser_T, SignInOptions_T>) => {
	const controller = useCloudFSController(rootDir)

	if (!controller.signedIn) {
		return {
			signedIn: false as const,
			signInOptions: controller.signInOptions
		}
	}

	const { fileTree: rawFileTree, fsOps } = controller

	const bindFileTree = (tree: fsFolderData_T | null): fsFolder_T | null => {
		if (!tree) return null

		const files = {} as { [key: string]: fsFile_T }
		for (const fileName in tree.files) {
			const fileMeta = tree.files[fileName]!
			const fullPath = fileMeta!.metadata.path

			files[fileName] = {
				...fileMeta,
				getDownloadURL: () => fsOps.getDownloadURL(fullPath),
				rename: (newName: string) => fsOps.renameFile(fullPath, `${fileMeta.metadata.parentFolder}/${newName}`),
				delete: () => fsOps.deleteFile(fullPath)
			}
		}

		const folders = {} as { [key: string]: fsFolder_T }
		for (const folderName in tree.folders) {
			folders[folderName] = bindFileTree(tree.folders[folderName]!)!
		}

		const folderPath = tree.metadata.path
		return {
			metadata: { ...tree.metadata },
			permissions: { ...tree.permissions },
			files,
			folders,
			createSubFolder: (name: string) => fsOps.createFolder(`${folderPath}/${name}`),
			rename: (newName: string) => fsOps.renameFolder(folderPath, `${tree.metadata.parentFolder}/${newName}`),
			delete: () => fsOps.deleteFolder(folderPath),
			getDownloadURL: () => fsOps.getDownloadURL(folderPath),
			setAutoDelete: (date: Date) => fsOps.setAutoDelete(folderPath, date),
			uploadFile: (file: File) => fsOps.uploadFile(folderPath, file)
		}
	}


	const fileTree: fsFolder_T | null = bindFileTree(rawFileTree)

	return { ...controller, fileTree }
}

export { useCloudFS }
