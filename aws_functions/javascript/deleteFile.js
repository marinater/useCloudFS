/* Amplify Params - DO NOT EDIT
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

exports.handler = async (event) => {
  // TODO implement
  const fileName = event.arguments.fileName;
  const bucketName = process.env.STORAGE_S339D0DF12_BUCKETNAME;
  await deleteFile(bucketName, fileName);

    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(`deleted File ${fileName}: ${bucketName}`),
    };
    return response;
};
