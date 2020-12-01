/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S339D0DF12_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadFile = async (bucketName, folderName, fileName) => {
  const params = {
    Bucket : bucketName,
    Key : fileName,
    Expires: 60 * 5
  };

  try {
    const url = await new Promise((resolve, reject) => {
      s3.getSignedUrl('putObject', params, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
    console.log('URL', url);
    return url;
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
  return `${folderName} ${fileName}`;
};

exports.handler = async (event) => {
  // TODO implement
  const fileName = event.arguments.fileName;
  const folderName = event.arguments.folderName;
  const bucketName = process.env.STORAGE_S339D0DF12_BUCKETNAME;

  const uploadFileURL = await uploadFile(bucketName, folderName, fileName);
    const response = {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: uploadFileURL
    };
  return response;
};

