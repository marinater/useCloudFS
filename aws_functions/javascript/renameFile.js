/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S339D0DF12_BUCKETNAME
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S339D0DF12_BUCKETNAME
  Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const deleteFile = async (bucketName, fileName) => {
  const params = {
    Bucket : bucketName,
    Key : fileName
  };
  try {
    await s3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      }
      else {
        console.log("Response:", data);
      }
    }).promise();
  } catch (error) {
    console.error("Error:", error);
  }
};

const copyFile = async (bucketName, oldName, newName) => {
  const params = {
    Bucket : bucketName,
    CopySource: `${bucketName}/${oldName}`,
    Key: newName
  };
  try {
    await s3.copyObject(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      }
      else {
        console.log("Response:", data);
      }
    }).promise();
  } catch (error) {
    console.error("Error:", error);
  }
};

const renameFile = async (bucketName, oldName, newName) => {
  await copyFile(bucketName, oldName, newName);
  await deleteFile(bucketName, oldName);
};

exports.handler = async (event) => {
  // TODO implement
  const oldName = event.arguments.oldName;
  const newName = event.arguments.newName;
  const bucketName = process.env.STORAGE_S339D0DF12_BUCKETNAME;
  await renameFile(bucketName, oldName, newName);

  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(`Renamed File: Old Name ${oldName}, New Name ${newName}`)
  };
    return response;
};
