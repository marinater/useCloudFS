/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S339D0DF12_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

async function deleteFolder(bucket, path) {
  const listParams = {
    Bucket: bucket,
    Prefix: path
  };

  const listedObjects = await s3.listObjectsV2(listParams).promise();
  console.log("listedObjects", listedObjects);
  if (listedObjects.Contents.length === 0) return;

  const deleteParams = {
    Bucket: bucket,
    Delete: { Objects: [] }
  };

  listedObjects.Contents.forEach(({ Key }) => {
    deleteParams.Delete.Objects.push({ Key });
  });
  console.log("deleteParams", deleteParams);

  const deleteResult = await s3.deleteObjects(deleteParams).promise();
  console.log("deleteResult", deleteResult);
  if (listedObjects.IsTruncated && deleteResult)
    await deleteFolder(bucket, path);
}

exports.handler = async (event) => {
  // TODO implement
  const bucketName = process.env.STORAGE_S339D0DF12_BUCKETNAME;
  const folderName = event.arguments.folderName;
  const result = await deleteFolder(bucketName, folderName);

    const response = {
        statusCode: 200,
      //  Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
        body: JSON.stringify(result)
    };
    return response;
};
