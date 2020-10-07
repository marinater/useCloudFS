import 'firebase/auth'
import 'firebase/database'
// import 'firebase/storage'
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
	// const storageRoot = useStorage()

	if (!auth.currentUser) {
		return { signedIn: false }
	}

	const db = database.ref('useCloudFS')
	// const storage = storageRoot.ref('useCloudFS')

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

		return db.child(folderPath).set(folderData).catch(() => Promise.reject('CreateFolderError: Folder already exists'))
	}

	const renameFolder: fsOps_T['renameFolder'] = async () => {
		if (!auth.currentUser)
			return Promise.reject('User not signed in to Firebase')
		return Promise.reject('RenameFolderError: Rename folder is not supported for Firebase RealtimeDB at the moment')
	}

	const deleteFolder: fsOps_T['deleteFolder'] = async (folderPath) => {
		if (!auth.currentUser)
			return Promise.reject('User not signed in to Firebase')

		let existed = false
		await db.child(folderPath).transaction(folder => {
			if (folder !== null)
				existed = true

			return null
		})

		return existed ? undefined : Promise.reject('DeleteFolderError: Folder does not exist')
	}

	const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
		if (!auth.currentUser)
			return Promise.reject('User not signed in to Firebase')

		// @ts-ignore
		const [_, fileName] = splitPath(`${folderName}/${file.name}`)
		let err: string | undefined

		db.child(folderName).child('files').transaction(data => {
			if (data === null) return null

			if (fileName in data) {
				err = 'UploadFileError: File with same name exists in the folder'
				return
			}

			data[fileName] = true

			console.log(data)
			return data
		}).catch(error => err = error)

		return err ? Promise.reject(err) : undefined
	}

	const renameFile: fsOps_T['renameFile'] = async (oldPath, newPath) => {
		console.info(`renameFile: ${oldPath} -> ${newPath}`)

		const token = await auth.currentUser!.getIdToken(false)
		const headers = new Headers({
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		})

		const body = JSON.stringify({
			oldPath,
			newPath
		})

		const requestOptions = {
			method: 'POST',
			headers,
			body
		}

		const res = await fetch('http://localhost:5000/use-storage/us-central1/app/renameFile', requestOptions)
		if (res.status != 200)
			return Promise.reject(await res.text())

		return
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
