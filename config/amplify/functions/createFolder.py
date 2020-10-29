import boto3

s3 = boto3.resource('s3')
s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'

def uploadFile(folderName):
	# Assumes the file to upload is in the current working directory
	folderUploadPath = ''
	if folderName:
		fileUploadPath = f'{folderName}/'
	else:
		fileUploadPath = f'{fileName}'
	s3.meta.client.upload_file(fileName, s3BucketName, fileUploadPath)
