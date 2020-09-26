import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes';

// Setup code for AWS Amplify and Amplify Storage
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const useAmplifyController: useCloudFSController_T<{ isAuthenticated: boolean, username?: string }> = () => {
	if (false as boolean) {
		return { signedIn: false }
	}

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
		// If folderName does not currently exist in the S3 bucket, a new
		// folder: folderName is created with the file inside of it
		console.info(`uploadFile: ${folderName}/${file.name}`)
		
		// Reads the content of the file using the promise
		file.text()
			.then(text => {
				Storage.put(`${folderName}/${file.name}`, text)
					.then (result => {
						// {key: "fileName.txt"}
						console.log(result);
					})
					.catch(err => {
						console.error(err);
					});
			})
			.catch(err => {
				console.error(err);
			});
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
		user: { isAuthenticated: true, username: 'some-username'},
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

export { useAmplifyController }
