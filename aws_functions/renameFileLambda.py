import json
import boto3
import os

s3 = boto3.resource('s3')
s3BucketName = os.environ.get('userBucket')

def renameFile(oldName, newName):
	s3.Object(s3BucketName, newName).copy_from(CopySource=f'{s3BucketName}/{oldName}')
	s3.Object(s3BucketName, oldName).delete()
	return newName

def lambda_handler(event, context):
    newName = renameFile(event['queryStringParameters']['oldName'], event['queryStringParameters']['newName'])
    return {
        'statusCode': 200,
        'body': newName
    }
