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

	const makeFunctionRequest = async (method: 'GET' | 'PUT' | 'POST', path: string, data: any) => {
		const token = await auth.currentUser!.getIdToken(false)
		const headers = new Headers({
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		})

		const requestOptions = {
			method: method,
			headers,
			body: JSON.stringify(data)
		}

		return fetch('http://localhost:5000/use-storage/us-central1/app/' + path, requestOptions)
	}

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

	const renameFolder: fsOps_T['renameFolder'] = async (folderPath) => {
		console.info(`renameFolder: ${folderPath}`)
		if (!auth.currentUser)
			return Promise.reject('User not signed in to Firebase')
		return Promise.reject('RenameFolderError: Rename folder is not supported for Firebase RealtimeDB at the moment')
	}

	const deleteFolder: fsOps_T['deleteFolder'] = async (folderPath) => {
		console.info(`deleteFolder: ${folderPath}`)

		if (!auth.currentUser)
			return Promise.reject('User not signed in to Firebase')


		let existed = false
		let err = null
		await db.child(folderPath).transaction(folder => {
			if (folder !== null) {
				existed = true
			}

			return null
		}).catch(() => err = 'DeleteFolderError: User does not have permissions to delete folder')

		if (!existed)
			return Promise.reject('DeleteFolderError: Folder does not exist')
		return err ? Promise.reject(err) : undefined
	}

	const uploadFile: fsOps_T['uploadFile'] = async (folderPath, file) => {
		console.log(`uploadFile: ${folderPath} ${file.name}`)
		if (!auth.currentUser)
			return Promise.reject('UploadFileError: User not signed in to Firebase')

		const res = await makeFunctionRequest('POST', 'getUploadURL', { path: `${folderPath}/${file.name}`, contentType: file.type })
		if (res.status != 200)
			return Promise.reject(await res.text())

		const uploadURL = await res.text()

		const formdata = new FormData()
		formdata.append('', file, file.name)

		if (!file.type)
			return Promise.reject('UploadFileError: Uploaded files must have a MIME type')

		console.log(`file type: ${file.type}`)
		const headers = new Headers({
			'Content-Type': file.type,
		})
		const requestOptions = {
			method: 'PUT',
			headers,
			body: formdata,
			redirect: 'follow' as const
		}

		let err: null | string = null
		await fetch(uploadURL, requestOptions).catch(error => err = error)
		if (err) return Promise.reject(err)

		const [folderName, fileName] = splitPath(`${folderPath}/${file.name}`)

		await db.child(folderName).child('files').update({ [fileName]: true })
			.catch(error => err = error)
		// await db.child(folderName).child('files').transaction(data => {
		// 	if (data === null) return null

		// 	if (fileName in data) {
		// 		err = 'UploadFileError: File with same name exists in the folder'
		// 		return
		// 	}

		// 	data[fileName] = true

		// 	return data
		// }).catch(error => err = error)

		return err ? Promise.reject(err) : undefined
	}

	const renameFile: fsOps_T['renameFile'] = async (oldPath, newPath) => {
		console.info(`renameFile: ${oldPath} -> ${newPath}`)
		const res = await makeFunctionRequest('POST', 'renameFile', { oldPath, newPath })

		if (res.status != 200)
			return Promise.reject(await res.text())
		return
	}

	const deleteFile: fsOps_T['deleteFile'] = async (path) => {
		console.info(`deleteFile: ${path}`)

		const [folderName,fileName] = splitPath(path)
		const fileRef = db.child(`${folderName}/files/${fileName}`)

		return fileRef.set(null).catch(() => Promise.reject('DeleteFileError: File does not exist or you do not have write priveledges'))
	}

	const getDownloadURL: fsOps_T['getDownloadURL'] = async (path) => {
		console.info(`getDownloadURL: ${path}`)
		const res = await makeFunctionRequest('POST', 'getDownloadURL', { path })

		if (res.status != 200)
			return Promise.reject(await res.text())

		return await res.text()
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
