import boto3

s3 = boto3.resource('s3')
s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'

bucket = s3.Bucket(s3BucketName)

def deleteFolder(folderName):
	bucket.objects.filter(Prefix=f'{folderName}/').delete()

# deleteFolder('bruh')

