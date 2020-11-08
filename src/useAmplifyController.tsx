import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'
import { createFolder as createFolder2 } from './graphql/mutations';
import awsconfig from './aws-exports';
import { Auth } from '@aws-amplify/auth';
import { API, graphqlOperation } from 'aws-amplify';
import axios from 'axios';
API.configure(awsconfig);
Auth.configure(awsconfig);


//const ROOT_NAME = 'useCloudFS'
async function signUp() {
	try {
			const { user } = await Auth.signUp({
					username: 'test-email2',
					password: 'test-password',
					attributes: {
							email: 'omarlcobas@gmail.com' // optional
					}
			});
			console.log(user);
	} catch (error) {
			console.log('error signing up:', error);
	}
}

async function confirmSignUp() {
	try {
		await Auth.confirmSignUp('test-email2', '985319');
	} catch (error) {
			console.log('error confirming sign up', error);
	}
}

async function signIn() {
	try {
			const user = await Auth.signIn('test-email3', 'test-password');
	} catch (error) {
			console.log('error signing in', error);
	}
}

const useAmplifyController: useCloudFSController_T<{ username: string }> = () => {
	const isAuthenticated = false as boolean
	if (isAuthenticated) {
		return { signedIn: false }
	}

	const createFolder: fsOps_T['createFolder'] = async (folderName) => {
		// console.log('signedUp', await signUp(), folderName);
		// console.log('confirmSignUp', await confirmSignUp(), folderName);
		console.log('signedIn', await signIn(), folderName);
		// const link = "https://cors-anywhere.herokuapp.com/" +
		// 	"https://mwhdj2nwv3.execute-api.us-east-1.amazonaws.com/default/createFolder";
		// const bucketName = "amplify-usecloudfs-dev-182044-deployment";
		// try {
		// 	const response = await axios.post(link, null, {
		// 		params: {
		// 			folderName,
		// 			bucketName
		// 		}
		// 	});
		// 	console.log('CreateFolder: AXIOS Post Request Success.', response);
		// } catch (err) {
		// 	console.error('CreateFolder: AXIOS Post Request Failed.');
		// }
		// axios.post('API GATEWAY API/createFolder/folderName')
		console.log(folderName);
		// Call graphql mutation for createFile (contains createFile lambda)
		const inputData = {
			"folderName": folderName
		};

		const result = API.graphql(graphqlOperation(createFolder2, inputData));
		console.log('SUCCESS: createFolder LAMBDA', result);
		return
	}

	const renameFolder: fsOps_T['renameFolder'] = async (oldName, newName) => {
		// https://8qm2qjzkg0.execute-api.us-east-1.amazonaws.com/default/renameFolder?oldName=test&newName=ohh&bucketName=amplify-usecloudfs-dev-182044-deployment
		console.log(oldName);
		console.log(newName);
		return
	}

	const deleteFolder: fsOps_T['deleteFolder'] = async (folderName) => {
		// https://ue0h5vq049.execute-api.us-east-1.amazonaws.com/default/deleteFolder?folderName=testName&bucketName=amplify-usecloudfs-dev-182044-deployment
		console.log(folderName);
		return
	}
	const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
		// TODO: use signed URL
		// https://emrwbr16gh.execute-api.us-east-1.amazonaws.com/default/uploadFile?bucketName=amplify-usecloudfs-dev-182044-deployment&fileName=document.pdf&folderName=good.pdf
		console.log(file);
		console.log(folderName);
		return
	}

	const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
		// https://hflstwfuxd.execute-api.us-east-1.amazonaws.com/default/renameFile?oldName=hola&newName=test1&bucketName=amplify-usecloudfs-dev-182044-deployment
		console.log(oldName, newName);
		// const args = { oldName, newName };
		// const data = await API.graphql(graphqlOperation(renameFile, args));
		// return data;
	}

	const deleteFile: fsOps_T['deleteFile'] = async (fileName) => {
		// https://hrju8sovxi.execute-api.us-east-1.amazonaws.com/default/deleteFile?fileName=yassss.txt&bucketName=amplify-usecloudfs-dev-182044-deployment
		console.log(fileName);
		return
	}

	const getDownloadURL: fsOps_T['getDownloadURL'] = async (fileName) => {
		// https://obw4xgu950.execute-api.us-east-1.amazonaws.com/default/getDownloadURL?fileName=3.pdf&bucketName=amplify-usecloudfs-dev-182044-deployment
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
			renameFile,
			deleteFile,
			getDownloadURL,
			setAutoDelete
		} as fsOps_T
	}
}

export { useAmplifyController }
