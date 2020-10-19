import json
import boto3
import os

s3 = boto3.resource('s3')
s3BucketName = os.environ.get('userBucket')

def deleteFile(fileName):
	s3.Object(s3BucketName, fileName).delete()
	return fileName

def lambda_handler(event, context):
    deletedFile = deleteFile(event['fileName'])
    return {
        'statusCode': 200,
        'body': deletedFile
    }
