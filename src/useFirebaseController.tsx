import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import { useAuth, useDatabase } from 'reactfire'
import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'




const parseFileName = (fileName: string) => {
	const path = fileName.split('/')
	const filename = path.pop()!.replace(/\./g,'*')
	const foldername = path.join(':')
	return [foldername,filename]
}


const useFirebaseController: useCloudFSController_T<firebase.User> = () => {
	const auth = useAuth()

	if (!auth.currentUser) {
		return { signedIn: false }
	}

	const db = useDatabase().ref("useCloudFS")

	console.log(db.toString())

	const createFolder: fsOps_T['createFolder'] = async (folderName) => {
		console.info(`createFolder: ${folderName}`)
		return Promise.reject('not implemented')
	}

	const renameFolder: fsOps_T['renameFolder'] = async (oldName, newName) => {
		console.info(`renameFolder: ${oldName} -> ${newName}`)
		return Promise.reject('not implemented')
	}

	const deleteFolder: fsOps_T['deleteFolder'] = async (folderName) => {
		console.info(`deleteFolder: ${folderName}`)
		return Promise.reject('not implemented')
	}

	const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
        console.log(auth.currentUser)

        let filelocref = db.child(`${folderName}/files/${file.name.replace(/\./g, '*')}`)

        return filelocref.transaction(() => true)
	}

	const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
		console.info(`renameFile: ${oldName} -> ${newName}`)

        const [folderName, oldFileName] = parseFileName(oldName)
		let filelocref = db.child(`${folderName}/files/${oldFileName}`)

		return filelocref.transaction( () =>{
			uploadFile(folderName, new File([], newName))
			return null
		})
	}

	const deleteFile: fsOps_T['deleteFile'] = async (path) => {
		console.info(`deleteFile: ${path}`)

		const [folderName,fileName] = parseFileName(path)
		let filelocref = db.child(`${folderName}/files/${fileName}`)

		console.log(folderName)
		console.log(fileName)

		return filelocref.transaction( () => null)
	}

	const getDownloadURL: fsOps_T['getDownloadURL'] = async (fileName) => {
		console.info(`getDownloadURL: ${fileName}`)
		return Promise.reject('not implemented')
	}

	const setAutoDelete: fsOps_T['setAutoDelete'] = async (folderName) => {
		console.info(`setAutoDelete: ${folderName}`)
		return Promise.reject('not implemented')
	}

	return {
		signedIn: true,
		user: auth.currentUser,
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

export { useFirebaseController }
