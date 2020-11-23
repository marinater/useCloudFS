const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const createFolder = (folderName, bucketName="") => {
	const params = {
		Bucket: bucketName, /* required */
		Key: `${folderName}/`, /* required */
	};
	s3.putObject(params, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	return bucketName + " " + folderName;
};

console.log(createFolder('nxt', 'amplify-usecloudfs-dev-182044-deployment103908-dev'));