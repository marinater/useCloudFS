/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S339D0DF12_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const createFolder = (bucketName, folderName) => {
	const params = {Bucket: bucketName, Key: `${folderName}/`};
  return new Promise((resolve, reject) => {
    s3.putObject(params, function (err, result) {
      if(err) reject(err);
      if(result) resolve(result);
    });
  });
};

exports.handler = async (event) => {
  const folderName = event.arguments.folderName;
  const bucketName = process.env.STORAGE_S339D0DF12_BUCKETNAME;

  const result = await createFolder(bucketName, folderName);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }, 
    body: JSON.stringify(result)
  };
  return response;
};
