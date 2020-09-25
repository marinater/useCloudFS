import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import { useAuth, useDatabase } from 'reactfire'
import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'

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
		let filelocref = db.child(`${folderName}/files`)

		
		const result = filelocref.set({
			[file.name]: true
		});

		return result

		//console.info(`uploadFile: ${folderName}/${file.name}`)
		//return Promise.reject('not implemented')

	}

	const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
		console.info(`renameFile: ${oldName} -> ${newName}`)
		return Promise.reject('not implemented')
	}

	const deleteFile: fsOps_T['deleteFile'] = async (fileName) => {
		console.info(`deleteFile: ${fileName}`)
		return Promise.reject('not implemented')
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
