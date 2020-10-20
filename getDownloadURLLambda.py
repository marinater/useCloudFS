import json
import boto3
import os

s3 = boto3.client('s3')
s3BucketName = os.environ.get('userBucket')

def getDownloadURL(fileName):
	params = {'Bucket': s3BucketName, 'Key': fileName}
	# By default the link expires in an hour, add expiresIn=numOfSeconds
	link = s3.generate_presigned_url('get_object', Params = params)
	return link

def lambda_handler(event, context):
    downloadURL = getDownloadURL(event['fileName'])
    return {
        'statusCode': 200,
        'body': downloadURL
    }