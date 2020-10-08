const Router = require('express-promise-router')
const admin = require('firebase-admin')

const router = new Router()
const db = admin.database()
const storage = admin.storage()

const splitPath = (fileName) => {
	if (!fileName) return ['', '']

	const path = fileName.split('/')
	const tail = path.pop().replace(/\./g,'*')
	const head = path.join(':')
	return [head, tail]
}

router.post('/', async (req, res) => {
	const { path, contentType } = req.body
	if (!path || !contentType) {
		res.send('RenameFileError: path or contentType not provided to cloud function')
		return
	}

	const [parentFolder, fileName] = splitPath(path)
	if (!parentFolder) {
		res.status(405).send('RenameFileError: Cannot upload files to root directory')
		return
	}

	console.info(`getUploadURL: ${path}`)
	const parentRef = db.ref(`useCloudFS/${parentFolder}`)

	let err = false
	await parentRef.once('value').then(data => {
		if (!(req.user.uid in data.permissions.write)) {
			err = 'GetUploadURLError: User cannot write to this folder'
			return
		}

		if (fileName in data.files) {
			err = 'GetUploadURLError: File already exists'
			return
		}
	})
	.catch(err => {
		err = `GetUploadURLError: Forwarded Firebase Error -> ${err}`
	})

	if (err) {
		res.status(405).send(err)
		return
	}

	const expDate = new Date();
	expDate.setMinutes( expDate.getMinutes() + 1 );
	storage.bucket().file(`useCloudFS/${path}`).getSignedUrl({action: 'write', expires: expDate.valueOf(), version: 'v4', contentType })
	.then(url => {
		res.status(200).send(url[0])
	})
	.catch(err =>
		res.status(405).send(`GetUploadURLError: Could not generate upload link -> ${err}`)
	)
})

module.exports = router
