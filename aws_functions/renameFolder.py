import boto3

s3 = boto3.resource('s3')

# Setup, get name of bucket
s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'
bucket = s3.Bucket(s3BucketName)

def renameFolder(oldName, newName):
	for object in bucket.objects.filter(Prefix=oldName):
			srcKey = object.key
			if not srcKey.endswith('/'):
					fileName = srcKey.split('/')[-1]
					destFileKey = newName + '/' + fileName
					copySource = s3BucketName + '/' + srcKey         
					s3.Object(s3BucketName, destFileKey).copy_from(CopySource=copySource)
					s3.Object(s3BucketName, srcKey).delete()
	s3.Object(s3BucketName, f'{newName}/').copy_from(CopySource=f'{s3BucketName}/{oldName}/')
	s3.Object(s3BucketName, f'{oldName}/').delete()

renameFolder('testFolder', 'holA')
