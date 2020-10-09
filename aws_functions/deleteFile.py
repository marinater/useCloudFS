import boto3

s3 = boto3.resource('s3')
s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'

def deleteFile(fileName):
	s3.Object(s3BucketName, fileName).delete()

deleteFile('todo.txt')
