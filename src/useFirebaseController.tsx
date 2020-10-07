import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import { useAuth, useDatabase } from 'reactfire'
import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'


const splitPath = (fileName: string) => {
	if (!fileName) return ['', '']

	const path = fileName.split('/')
	const tail = path.pop()!.replace(/\./g,'*')
	const head = path.join(':')
	return [head, tail]
}

const useFirebaseController: useCloudFSController_T<firebase.User> = () => {
	const auth = useAuth()
	const database = useDatabase()

	if (!auth.currentUser) {
		return { signedIn: false }
	}

	const db = database.ref('useCloudFS')

	const createFolder: fsOps_T['createFolder'] = async (folderPath) => {
		console.info(`createFolder: ${folderPath}`)
		if (!auth.currentUser)
			return Promise.reject('User not signed in to Firebase')

		const uid = auth.currentUser.uid
		const [parentFolder, name] = splitPath(folderPath)

		const folderData = {
			files: {
				'__useCloudFS__': true
			},
			metadata: {
				createdOn: Date.now(),
				name,
				parentFolder
			},
			permissions: {
				autoDelete: 0,
				owner: uid,
				read: {
					[uid] : true
				},
				write: {
					[uid] : true
				}
			},
			subFolders: {
				'__useCloudFS__': true
			}
		}

		let err
		await db.child(folderPath).transaction(folder => {
			if (folder !== null) {
				err = Promise.reject('CreateFolderError: Folder already exists')
				return
			}
			return folderData
		})

		return err || undefined
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

		const fileRef = db.child(`${folderName}/files/${file.name.replace(/\./g, '*')}`)

		return fileRef.transaction(() => true)
	}

	const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
		console.info(`renameFile: ${oldName} -> ${newName}`)

		const [folderName, oldFileName] = splitPath(oldName)
		const fileRef = db.child(`${folderName}/files/${oldFileName}`)

		return fileRef.transaction( () =>{
			uploadFile(folderName, new File([], newName))
			return null
		})
	}

	const deleteFile: fsOps_T['deleteFile'] = async (path) => {
		console.info(`deleteFile: ${path}`)

		const [folderName,fileName] = splitPath(path)
		const fileRef = db.child(`${folderName}/files/${fileName}`)

		console.log(folderName)
		console.log(fileName)

		return fileRef.transaction(() => null)
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
