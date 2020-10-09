import boto3

s3 = boto3.resource('s3')
s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'

def renameFile(oldName, newName):
	s3.Object(s3BucketName, newName).copy_from(CopySource=f'{s3BucketName}/{oldName}')
	s3.Object(s3BucketName, oldName).delete()

# renameFile('todo2.txt', 'yassss.txt')
