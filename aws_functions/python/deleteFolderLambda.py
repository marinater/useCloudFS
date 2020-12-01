import json
import boto3
import os

s3 = boto3.resource('s3')
s3BucketName = os.environ.get('userBucket')

def deleteFolder(folderName):
	bucket = s3.Bucket(s3BucketName)
	bucket.objects.filter(Prefix=f'{folderName}/').delete()
	return folderName

def lambda_handler(event, context):
    deletedFolder = deleteFolder(event["queryStringParameters"]['folderName'])
    return {
        'statusCode': 200,
        'body': deletedFolder
    }
    

