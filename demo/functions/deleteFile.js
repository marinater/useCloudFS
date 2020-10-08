const Router = require('express-promise-router')
const admin = require('firebase-admin')
const splitPath = require('./splitPath')

const router = new Router()
const db = admin.database()
const storage = admin.storage()

router.post('/', async (req, res) => {
	const { path } = req.body
	if (!path) {
		res.send('DeleteFileError: path not provided to cloud function')
		return
	}

	const [parentFolder, fileName] = splitPath(path)

	if (!parentFolder) {
		res.status(405).send('DeleteFileError: Cannot save file to root directory')
		return
	}

	console.info(`delete: ${path}`)

	const parentRef = db.ref(`useCloudFS/${parentFolder}`)

	let err = false
	let exists = false

	await parentRef.transaction(data => {
		if (data === null) return null;
		exists = true
		if (!(req.user.uid in data?.permissions?.read) || !(req.user.uid in data?.permissions?.write)) {
			err = 'DeleteFileError: User does not have read and write permissions to the parent folder'
			return
		}

		if (!(fileName in data.files)) {
			err = 'DeleteFileError: File does not exist'
			return
		}

		delete data.files[fileName]
		return data
	})
	.catch(err => {
		err = `DeleteFileError: Forwarded Firebase Error -> ${err}`
	})

	if (!exists) {
		res.status(405).send('DeleteFileError: Folder does not exist')
		return
	}
	if (err) {
		res.status(405).send(err)
		return
	}

	const fileRef = storage.bucket().file(`useCloudFS/${path}`)

	await fileRef.delete().catch(error => err = error)
	if (err) {
		res.status(405).send(err)
		return
	}
	console.log('deleted')
	res.status(200).send('success')
})

module.exports = router