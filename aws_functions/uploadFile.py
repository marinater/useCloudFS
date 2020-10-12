import boto3

s3 = boto3.resource('s3')
s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'

def uploadFile(folderName, fileName):
	# Assumes the file to upload is in the current working directory
	fileUploadPath = ''
	if folderName:
		fileUploadPath = f'{folderName}/{fileName}'
	else:
		fileUploadPath = f'{fileName}'
	s3.meta.client.upload_file(fileName, s3BucketName, fileUploadPath)

uploadFile('df', 'bro.txt')