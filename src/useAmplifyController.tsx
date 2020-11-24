import { fsOps_T, useCloudFSController_T } from './useCloudFSTypes'
import { createFolder6 as createFolder2 } from './graphql/mutations';
import awsconfig from './aws-exports';
import { Auth } from '@aws-amplify/auth';
import { API, graphqlOperation } from 'aws-amplify';
import axios from 'axios';
API.configure(awsconfig);
Auth.configure(awsconfig);

// JWT https://www.jeremydaly.com/verifying-self-signed-jwt-tokens-with-aws-http-apis/
// openssl genrsa -out private.key 4096
// openssl rsa -in private.key -pubout -out public.key
//const ROOT_NAME = 'useCloudFS'
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
        //console.log('signedUp', await signUp(), folderName);
        //console.log('confirmSignUp', await confirmSignUp(), folderName);
        console.log('signedIn', await signIn(), folderName);
        // https://mwhdj2nwv3.execute-api.us-east-1.amazonaws.com/default/createFolder?folderName=ss&bucketName=amplify-usecloudfs-dev-182044-deployment
        // const link = "https://cors-anywhere.herokuapp.com/" +
        // 	"https://mwhdj2nwv3.execute-api.us-east-1.amazonaws.com/default/createFolder";
        // const bucketName = awsconfig.aws_user_files_s3_bucket;
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
        const link = "https://cors-anywhere.herokuapp.com/" +
            "https://8qm2qjzkg0.execute-api.us-east-1.amazonaws.com/default/renameFolder";
        const bucketName = awsconfig.aws_user_files_s3_bucket;
        try {
            const response = await axios.post(link, null, {
                params: {
                    oldName,
                    newName,
                    bucketName
                }
            });
            console.log('renameFolder: AXIOS Post Request Success.', response);
        } catch (err) {
            console.error('renameFolder: AXIOS Post Request Failed.');
        }
        // axios.post('API GATEWAY API/renameFolder/folderName')
        return
    }

    const deleteFolder: fsOps_T['deleteFolder'] = async (folderName) => {
        // https://ue0h5vq049.execute-api.us-east-1.amazonaws.com/default/deleteFolder?folderName=testName&bucketName=amplify-usecloudfs-dev-182044-deployment
        console.log(folderName);
        const link = "https://cors-anywhere.herokuapp.com/" +
            "https://ue0h5vq049.execute-api.us-east-1.amazonaws.com/default/deleteFolder";
        const bucketName = awsconfig.aws_user_files_s3_bucket;
        try {
            const response = await axios.post(link, null, {
                params: {
                    folderName,
                    bucketName
                }
            });
            console.log('deleteFolder: AXIOS Post Request Success.', response);
        } catch (err) {
            console.error('deleteFolder: AXIOS Post Request Failed.');
        }
        // axios.post('API GATEWAY API/deleteFolder/folderName')
        return
    }
    const uploadFile: fsOps_T['uploadFile'] = async (folderName, file) => {
        // TODO: use signed URL
        // https://emrwbr16gh.execute-api.us-east-1.amazonaws.com/default/uploadFile?bucketName=amplify-usecloudfs-dev-182044-deployment&fileName=document.pdf&folderName=good.pdf
        console.log(file);
        console.log(folderName);
        const link = "https://cors-anywhere.herokuapp.com/" +
            "https://emrwbr16gh.execute-api.us-east-1.amazonaws.com/default/uploadFile";
        const bucketName = awsconfig.aws_user_files_s3_bucket;
        try {
            const response = await axios.post(link, null, {
                params: {
                    folderName,
                    fileName: file,
                    bucketName
                }
            });
            console.log('uploadFile: AXIOS Post Request Success.', response);
        } catch (err) {
            console.error('uploadFile: AXIOS Post Request Failed.');
        }
        return
    }

    const renameFile: fsOps_T['renameFile'] = async (oldName, newName) => {
        // https://hflstwfuxd.execute-api.us-east-1.amazonaws.com/default/renameFile?oldName=hola&newName=test1&bucketName=amplify-usecloudfs-dev-182044-deployment
        console.log(oldName, newName);
        const link = "https://cors-anywhere.herokuapp.com/" +
            "https://hflstwfuxd.execute-api.us-east-1.amazonaws.com/default/renameFile";
        const bucketName = awsconfig.aws_user_files_s3_bucket;
        try {
            const response = await axios.post(link, null, {
                params: {
                    oldName,
                    newName,
                    bucketName
                }
            });
            console.log('renameFile: AXIOS Post Request Success.', response);
        } catch (err) {
            console.error('renameFile: AXIOS Post Request Failed.');
        }
        // const args = { oldName, newName };
        // const data = await API.graphql(graphqlOperation(renameFile, args));
        // return data;
    }

    const deleteFile: fsOps_T['deleteFile'] = async (fileName) => {
        // https://hrju8sovxi.execute-api.us-east-1.amazonaws.com/default/deleteFile?fileName=yassss.txt&bucketName=amplify-usecloudfs-dev-182044-deployment
        console.log(fileName);
        const link = "https://cors-anywhere.herokuapp.com/" +
            "https://hrju8sovxi.execute-api.us-east-1.amazonaws.com/default/deleteFile";
        const bucketName = awsconfig.aws_user_files_s3_bucket;
        try {
            const response = await axios.post(link, null, {
                params: {
                    fileName,
                    bucketName
                }
            });
            console.log('deleteFile: AXIOS Post Request Success.', response);
        } catch (err) {
            console.error('deleteFile: AXIOS Post Request Failed.');
        }
        return
    }

    const getDownloadURL: fsOps_T['getDownloadURL'] = async (fileName) => {
        // https://obw4xgu950.execute-api.us-east-1.amazonaws.com/default/getDownloadURL?fileName=3.pdf&bucketName=amplify-usecloudfs-dev-182044-deployment
        console.log(fileName);
        const link = "https://cors-anywhere.herokuapp.com/" +
            "https://obw4xgu950.execute-api.us-east-1.amazonaws.com/default/getDownloadURL";
        const bucketName = awsconfig.aws_user_files_s3_bucket;
        try {
            const response = await axios.post(link, null, {
                params: {
                    fileName,
                    bucketName
                }
            });
            console.log('getDownloadURL: AXIOS Post Request Success.', response);
            return response.data;
        } catch (err) {
            console.error('getDownloadURL: AXIOS Post Request Failed.');
        }
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
