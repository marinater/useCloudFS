import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'
import { createFolder as createFolder2 } from './graphql/mutations';
import awsconfig from './aws-exports';
import { API, graphqlOperation } from 'aws-amplify';
API.configure(awsconfig);

//const ROOT_NAME = 'useCloudFS'

const useAmplifyController: useCloudFSController_T<{ username: string }> = () => {
	const isAuthenticated = false as boolean
	if (isAuthenticated) {
		return { signedIn: false }
	}

	const createFolder: fsOps_T['createFolder'] = async (folderName) => {
		console.log(folderName);
		// Call graphql mutation for createFile (contains createFile lambda)
		const inputData = {
			"folderName": folderName
		};

		const result = API.graphql(
			graphqlOperation(createFolder2, {
				input: inputData
			})
		);
		console.log('SUCCESS: createFolder LAMBDA', result);
		return
	}

	const renameFolder: fsOps_T['renameFolder'] = async (oldName, newName) => {
		console.log(oldName);
		console.log(newName);
		return
	}

	const deleteFolder: fsOps_T['deleteFolder'] = async (folderName) => {
		console.log(folderName);
		return
	}
	const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
		console.log(file);
		console.log(folderName);
		return
	}

	// const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {

	// 	const args = { oldName, newName };
	// 	const data = await API.graphql(graphqlOperation(renameFile, args));
	// 	return data;
	// }

	const deleteFile: fsOps_T['deleteFile'] = async (fileName) => {
		console.log(fileName);
		return
	}

	const getDownloadURL: fsOps_T['getDownloadURL'] = async (fileName) => {
		console.log(fileName);
		return 'https://www.improgrammer.net/wp-content/uploads/2016/02/16-1.gif'
	}

	const setAutoDelete: fsOps_T['setAutoDelete'] = async (folderName) => {
		console.log(folderName);
		return
	}

	return {
		signedIn: true,
		user: { username: 'some-username' },
		fsOps: {
			createFolder,
			renameFolder,
			deleteFolder,
			uploadFile,
			//renameFile,
			deleteFile,
			getDownloadURL,
			setAutoDelete
		} as fsOps_T
	}
}

export { useAmplifyController }
