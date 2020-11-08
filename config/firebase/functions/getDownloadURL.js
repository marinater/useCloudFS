const Router = require('express-promise-router')
const admin = require('firebase-admin')
const splitPath = require('./splitPath')
const unescapePath = require('./unescapePath')

const router = new Router()
const db = admin.database()
const storage = admin.storage()

router.post('/', async (req, res) => {
	const { path } = req.body
	if (!path) {
		res.send('RenameFileError: Path not provided to cloud function')
		return
	}

	console.log(path)
	const [parentFolder, fileName] = splitPath(path)

	if (!parentFolder) {
		res.status(405).send('RenameFileError: Cannot download files from root directory')
		return
	}

	console.info(`getDownloadURL: ${path}`)

	const parentRef = db.ref(`useCloudFS/${parentFolder}`)

	let err = false

	await parentRef.once('value').then(data => {
		if (!(req.user.uid in data.permissions.read)) {
			err = 'GetDownloadURLError: User does not have read permissions for this folder'
			return
		}
		console.log(data)
		if (!(fileName in data.files)) {
			err = 'GetDownloadURLError: File does not exist'
			return
		}
	})
		.catch(err => {
			err = `GetDownloadURLError: Forwarded Firebase Error -> ${err}`
		})

	if (err) {
		res.status(405).send(err)
		return
	}

	const expDate = new Date()
	expDate.setMinutes( expDate.getMinutes() + 1 )

	storage.bucket().file(`useCloudFS/${unescapePath(path)}`).getSignedUrl({action: 'read', expires: expDate.valueOf(), version: 'v4'})
		.then(url => {
			res.status(200).send(url[0])
		})
		.catch(err =>
			res.status(405).send(`GetUploadURLError: Could not generate upload link -> ${err}`)
		)
})

module.exports = router
