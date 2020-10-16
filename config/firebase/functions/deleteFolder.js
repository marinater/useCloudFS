const functions = require('firebase-functions');
const admin = require('firebase-admin');

const deleteFolder = functions.database.ref('/useCloudFS/{folderPath}').onDelete((eventSnapshot, context) => {
	console.log('deleted')
	const subFolders = eventSnapshot.child('subFolders').val()

	const query = context.params.folderPath
	return eventSnapshot.ref.parent.orderByKey().startAt(query).endAt(query + '\uf8ff').once('value')
		.then(subFolderQuerySnapshot => {
			const promises = []
			subFolderQuerySnapshot.forEach( subFolderSnapshot => {
				const removeFolderPromise = subFolderSnapshot.ref.remove()
				promises.push(removeFolderPromise)
			})
			return Promise.allSettled(promises)
		})
});

exports.deleteFolder = deleteFolder