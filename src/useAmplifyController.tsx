import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'
//import { renameFile } from './graphql/queries';
import awsconfig from './aws-exports';
API.configure(awsconfig);

import React from 'react'
import Amplify, { Auth, API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

//const ROOT_NAME = 'useCloudFS'

const useAmplifyController: useCloudFSController_T<{ username: string }> = () => {
	const isAuthenticated = false as boolean

	if (isAuthenticated) {
		return { signedIn: false }
	}

	const createFolder: fsOps_T['createFolder'] = async (folderName) => {
		console.log(folderName);
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
