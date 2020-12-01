/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S339D0DF12_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const copyFolder = async (bucketName, oldName, newName) => {
  try {
    const listObjectsResponse = await s3.listObjects({
      Bucket: bucketName,
      Prefix: oldName,
      Delimiter: '/',
    }).promise();

    const folderContentInfo = listObjectsResponse.Contents;
    const folderPrefix = listObjectsResponse.Prefix;

    await Promise.all(
      folderContentInfo.map(async (fileInfo) => {
        await s3.copyObject({
          Bucket: bucketName,
          CopySource: `${bucketName}/${fileInfo.Key}`,  // old file Key
          Key: `${newName}/${fileInfo.Key.replace(folderPrefix, '')}`, // new file Key
        }).promise();
        
        await s3.deleteObject({
          Bucket: bucketName,
          Key: fileInfo.Key,
        }).promise();
      })
    );
  } catch (err) {
    console.error(err); // error handling
  }
};

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
};

const renameFolder = async (bucketName, oldName, newName) => {
  await copyFolder(bucketName, oldName, newName);
  await deleteFolder(bucketName, oldName);
};

exports.handler = async (event) => {
  // TODO implement
  const oldName = event.arguments.oldName;
  const newName = event.arguments.newName;
  const bucketName = process.env.STORAGE_S339D0DF12_BUCKETNAME;

  await renameFolder(bucketName, oldName, newName);

    const response = {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(`Renamed Folder: Old Name ${oldName}, New Name ${newName}`)
    };
    return response;
};
