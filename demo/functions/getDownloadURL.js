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
		if (!(req.user.uid in data?.permissions?.read)) {
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

	await storage.bucket().file(`useCloudFS/${path}`).delete()
	res.send('success')
})

module.exports = router
