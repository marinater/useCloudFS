import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'

const ROOT_NAME = 'useCloudFS'

const useAmplifyController: useCloudFSController_T<{username: string}> = () => {
	const isAuthenticated = false as boolean

	if (isAuthenticated) {
		return { signedIn: false }
	}

	const createFolder: fsOps_T['createFolder'] = async (folderName) => {
		return
	}

	const renameFolder: fsOps_T['renameFolder'] = async (oldName, newName) => {
		return
	}

	const deleteFolder: fsOps_T['deleteFolder'] = async (folderName) => {
		return
	}
	const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
		return
	}

	const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
		return
	}

	const deleteFile: fsOps_T['deleteFile'] = async (fileName) => {
		return
	}

	const getDownloadURL: fsOps_T['getDownloadURL'] = async (fileName) => {
		return 'https://www.improgrammer.net/wp-content/uploads/2016/02/16-1.gif'
	}

	const setAutoDelete: fsOps_T['setAutoDelete'] = async (folderName) => {
		return
	}

	return {
		signedIn: true,
		user: { username: 'some-username' },
		fsOps: {
			createFolder,
			renameFolder,
			deleteFolder,
			uploadFile,
			renameFile,
			deleteFile,
			getDownloadURL,
			setAutoDelete
		} as fsOps_T
	}
}

export { useAmplifyController }
