const Router = require('express-promise-router')
const admin = require('firebase-admin')
const splitPath = require('./splitPath')

const router = new Router()
const db = admin.database()
const storage = admin.storage()

router.post('/', async (req, res) => {
	const { oldPath, newPath } = req.body
	if (!oldPath || !newPath) {
		res.send('RenameFileError: oldPath and newPath not provided to cloud function')
		return
	}

	const [oldParentFolder, oldFileName] = splitPath(oldPath)
	const [newParentFolder, newFileName] = splitPath(newPath)

	if (!oldParentFolder || !newParentFolder) {
		res.status(405).send('RenameFileError: Cannot save file to root directory')
		return
	}

	if (oldParentFolder !== newParentFolder) {
		res.status(405).send('RenameFileError: Moving a file to a different folder is not supported for Firebase RealtimeDB')
		return
	}

	console.info(`renaming ${oldPath} to ${newPath}`)

	const parentRef = db.ref(`useCloudFS/${oldParentFolder}`)

	let err = false
	let exists = false

	await parentRef.transaction(data => {
		if (data === null) return null;
		exists = true
		if (!(req.user.uid in data.permissions.read) || !(req.user.uid in data.permissions.write)) {
			err = 'RenameFileError: User does not have read write permissions to the parent folder'
			return
		}

		if (!(oldFileName in data.files)) {
			err = 'RenameFileError: File does not exist'
			return
		}

		if (newFileName in data.files) {
			err = 'RenameFileError: New filename already exists'
			return
		}

		delete data.files[oldFileName]
		data.files[newFileName] = true
		return data
	})
	.catch(err => {
		err = `RenameFileError: Forwarded Firebase Error -> ${err}`
	})

	if (!exists) {
		res.status(405).send('RenameFileError: Folder does not exist')
		return
	}
	if (err) {
		res.status(405).send(err)
		return
	}

	const newFileRef = storage.bucket().file(`useCloudFS/${newPath}`)
	const oldFileRef = storage.bucket().file(`useCloudFS/${oldPath}`)

	await oldFileRef.move(newFileRef).catch(error => err = error)
	if (err) {
		res.status(405).send(err)
		return
	}

	res.status(200).send('success')
})

module.exports = router