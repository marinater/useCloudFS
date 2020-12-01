import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'
import { createFolder6 as createFolder2 } from './graphql/mutations';
import { deleteFolder2 as deleteFolder2 } from './graphql/mutations';
import { deleteFile2 as deleteFile2 } from './graphql/mutations';
import { renameFile2 as renameFile2 } from './graphql/mutations';
import { getDownloadUrl2 as getDownloadURL2 } from './graphql/mutations';
import { renameFolder2 as renameFolder2 } from './graphql/mutations';
import { uploadFile2 as uploadFile2 } from './graphql/mutations';
import awsconfig from './aws-exports';
import { Auth } from '@aws-amplify/auth';
import { API, graphqlOperation } from 'aws-amplify';
import axios from 'axios';
API.configure(awsconfig);
Auth.configure(awsconfig);

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username: 'test-email',
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
        await Auth.confirmSignUp('test-email', '239318');
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

async function signIn() {
    try {
        const user = await Auth.signIn('test-email', 'test-password');
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
        // needs create (C) permissions on lambda
        console.log('signedIn', await signIn(), folderName);
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
        console.log(oldName);
        console.log(newName);

        const inputData = {
            "oldName": oldName,
            "newName": newName
        };

        const result = API.graphql(graphqlOperation(renameFolder2, inputData));
        console.log('SUCCESS: renameFolder LAMBDA', result);
        return
    }

    const deleteFolder: fsOps_T['deleteFolder'] = async (folderName) => {
        // https://ue0h5vq049.execute-api.us-east-1.amazonaws.com/default/deleteFolder?folderName=testName&bucketName=amplify-usecloudfs-dev-182044-deployment
        console.log(folderName);
        // needs create, read (C, R) permissions on lambda
        // Call graphql mutation for createFile (contains createFile lambda)
        const inputData = {
            "folderName": folderName
        };

        const result = API.graphql(graphqlOperation(deleteFolder2, inputData));
        console.log('SUCCESS: deleteFolder LAMBDA', result);
        return
    }

    const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
        console.log(file);
        console.log(folderName);
        const inputData = {
            "folderName": folderName,
            "fileName": file
        };

        const result = API.graphql(graphqlOperation(uploadFile2, inputData));
        console.log('SUCCESS: uploadFile LAMBDA', result);

        return
    }

    const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
        // https://hflstwfuxd.execute-api.us-east-1.amazonaws.com/default/renameFile?oldName=hola&newName=test1&bucketName=amplify-usecloudfs-dev-182044-deployment
        console.log(oldName, newName);
        const inputData = {
            "oldName": oldName,
            "newName": newName
        };

        const result = API.graphql(graphqlOperation(renameFile2, inputData));
        console.log('SUCCESS: renameFile LAMBDA', result);
        // const args = { oldName, newName };
        // const data = await API.graphql(graphqlOperation(renameFile, args));
        // return data;
    }

    const deleteFile: fsOps_T['deleteFile'] = async (fileName) => {
        const inputData = {
            "fileName": fileName
        };

        const result = API.graphql(graphqlOperation(deleteFile2, inputData));
        console.log('SUCCESS: deleteFile LAMBDA', result);
        return
    }

    const getDownloadURL: fsOps_T['getDownloadURL'] = async (fileName) => {
        const inputData = {
            "fileName": fileName
        };

        const result = API.graphql(graphqlOperation(getDownloadURL2, inputData));
        console.log('SUCCESS: getDownloadURL LAMBDA', result);
        // TODO: result needs to be returned here, promise return type vs string
        return "http://test.com";
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
