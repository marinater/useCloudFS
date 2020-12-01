/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_USECLOUDFS2_BUCKETNAME
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const renameFile = (oldName, newName) => {
    console.log('BUCKET NAME:', process.env.STORAGE_USECLOUDFS2_BUCKETNAME)
    console.log('OLD NAME:', oldName)
    console.log('NEW NAME:', newName)
    // Copy Object
    let params = {
        Bucket: process.env.STORAGE_USECLOUDFS2_BUCKETNAME,
        CopySource: `/${process.env.STORAGE_USECLOUDFS2_BUCKETNAME}/${oldName}`, 
        Key: newName
       };
       s3.copyObject(params, (err, data) => {
         if (err) console.log(err, err.stack); // an error occurred
         else     console.log(data);           // successful response
         /*
         data = {
          CopyObjectResult: {
           ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
           LastModified: <Date Representation>
          }
         }
         */
       });
    // Delete Object
    params = {
        Bucket: process.env.STORAGE_USECLOUDFS2_BUCKETNAME,
        Key: newName
    };
    s3.deleteObject(params, function(err, data) {
        if (err) console.log(err, err.stack);  // error
        else     console.log();                 // deleted
      });
};

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
    const oldName = event.oldName;
    const newName = event.newName;
    console.log(event, oldName, newName);
    renameFile(oldName, newName);
    return response;
};
