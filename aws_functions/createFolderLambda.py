import json
import boto3
import os

s3 = boto3.client('s3')
s3BucketName = os.environ.get('userBucket')

def createFolder(folderName):
	# Assumes the file to upload is in the current working directory
	s3.put_object(Bucket=s3BucketName,Key=f'{folderName}/')
	return folderName

def lambda_handler(event, context):
    createdFolder = createFolder(event['folderName'])
    return {
        'statusCode': 200,
        'body': createdFolder
    }
