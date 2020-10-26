//  Amplify Params - DO NOT EDIT
	// ENV
	// REGION
	// STORAGE_USECLOUDFS2_BUCKETNAME
// Amplify Params - DO NOT EDIT 
// aws s3 --recursive mv s3://<bucketname>/<folder_name_from> s3://<bucket>/<folder_name_to>
// Rename File:
    // aws s3 --recursive mv s3://STORAGE_USECLOUDFS2_BUCKETNAME/<oldName> s3://STORAGE_USECLOUDFS2_BUCKETNAME/<newName>
// aws s3 mv s3://amplify-usecloudfs2-dev-183159-deployment/lab3.s s3://amplify-usecloudfs2-dev-183159-deployment/omg.s
const { spawn } = require("child_process");

const awsRenameOldFile = `s3://${process.env.STORAGE_USECLOUDFS2_BUCKETNAME}/${process.env.oldName}`;
const awsRenameNewFile = `s3://${process.env.STORAGE_USECLOUDFS2_BUCKETNAME}/${process.env.newName}`;
const awsRenameFileCmd = spawn("aws", ["s3", "mv", awsRenameOldFile, awsRenameNewFile]);

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    awsRenameFileCmd.stdout("data", data => {
        console.log(`stdout: ${data}`);
    });
    awsRenameFileCmd.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });
    awsRenameFileCmd.on("error", error => {
        console.log(`error: ${error.message}`);
    });
    awsRenameFileCmd.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });
    return response;
};
