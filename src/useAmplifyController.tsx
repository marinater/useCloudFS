import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes';

// Setup code for AWS Amplify and Amplify Storage
import Amplify, { API, graphqlOperation, Storage } from 'aws-amplify';
import { createFile } from './graphql/mutations';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const useAmplifyController: useCloudFSController_T<{ isAuthenticated: boolean, username?: string }> = () => {
	if (false as boolean) {
		return { signedIn: false }
	}

	const createFolder: fsOps_T['createFolder'] = async (folderName) => {
		console.info(`createFolder: ${folderName}`)
		// Creates an empty folder by calling Storage.put with empty file content
		Storage.put(`${folderName}/`, '')
			.then (result => {
				// {key: "folderName/"}
				console.log(result);
			})
			.catch(err => {
				console.error(err);
			});
	}

	const renameFolder: fsOps_T['renameFolder'] = async (oldName, newName) => {
		console.info(`renameFolder: ${oldName} -> ${newName}`)
		return Promise.reject('not implemented')
	}

	const deleteFolder: fsOps_T['deleteFolder'] = async (folderName) => {
		console.info(`deleteFolder: ${folderName}`)
		// Deletes a folder by calling Storage.remove with just folder name
		// if current folder length == 0 : remove(folderName)
		// else : Storage.remove(folderName/nextFolder)

		// Returns a list of files & folders in the current directory
		const storedFiles = await Storage.list(`${folderName}/`);
		console.log(storedFiles);
		const removeEmptyFolder: any = async (folderName: string) => {
			Storage.remove(`${folderName}/`, '')
			.then (result => {
				// {key: "folderName/"}
				console.log(result);
			})
			.catch(err => {
				console.error(err);
			});
		};
		// Base Case: If no more folders or files in current directory
		if (storedFiles.length === 0) {
			removeEmptyFolder(folderName);
		} else {
			for (let i : number = 0; i < storedFiles.length; i++) {
				if (storedFiles[i][storedFiles[i].length - 1] === '/') {
					// Currently, looking in a folder -> recurse on folder
					deleteFolder(storedFiles[i].key.slice(-1));
				} else {
					// Currently, looking in a file -> delete the file
					deleteFile(storedFiles[i].key);
				}
			}
		}
	}

	const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
		// If folderName does not currently exist in the S3 bucket, a new
		// folder: folderName is created with the file inside of it
		console.info(`uploadFile: ${folderName}/${file.name}`)
		
		// TODO: Work on
		// Link 1: https://dev.to/dabit3/graphql-tutorial-how-to-manage-image-file-uploads-downloads-with-aws-appsync-aws-amplify-hga
		// Link 2: https://medium.com/javascript-in-plain-english/how-to-build-a-crud-app-with-amplify-and-aws-appsync-a31ecbad58a7
		try {
			// Constructs file object data based off graphql schema
			const fileObject = {
				bucket: 'amplify-usecloudfs-dev-182044-deployment',
				region: 'us-east-1',
				key: file.name
			};

			const inputData = {
				name: file.name,
				path: `${folderName}/${file.name}`,
				file: fileObject
			};

			// Call graphql mutation for creating file
			const result = API.graphql(
				graphqlOperation(createFile, {
					input: inputData
				}));

			console.log('Successful grahql file upload:', result);
			
		} catch (err) {
			console.error("Error uploading file");
		}
	}

	const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
		console.info(`renameFile: ${oldName} -> ${newName}`)
		return Promise.reject('not implemented')
	}

	const deleteFile: fsOps_T['deleteFile'] = async (fileName) => {
		// Deletes a single file
		console.info(`deleteFile: ${fileName}`)
		Storage.remove(`${fileName}`)
			.then (result => {
				console.log(result);
			})
			.catch(err => {
				console.error(err);
			});
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
