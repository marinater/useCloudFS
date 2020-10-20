import json
import boto3
import os

s3 = boto3.resource('s3')

# Setup, get name of bucket
s3BucketName = os.environ.get('userBucket')
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
	return newName

#renameFolder('brahhhh', 'bruh')
def lambda_handler(event, context):
    renamedFolder = renameFolder(event['oldName'], event['newName'])
    return {
        'statusCode': 200,
        'body': renamedFolder
    }