import logging
import boto3
import json
from botocore.exceptions import ClientError

s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'
ACCESS_KEY = "AKIATVTUEGHOHP56V3XN"
SECRET_KEY = "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"

def create_presigned_post(bucket_name, object_name,
                          fields=None, conditions=None, expiration=3600):
    """Generate a presigned URL S3 POST request to upload a file

    :param bucket_name: string
    :param object_name: string
    :param fields: Dictionary of prefilled form fields
    :param conditions: List of conditions to include in the policy
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Dictionary with the following keys:
        url: URL to post to
        fields: Dictionary of form fields and values to submit with the POST
    :return: None if error.
    """

    # Generate a presigned S3 POST URL
    s3_client = boto3.client(
        's3',
        aws_access_key_id=ACCESS_KEY,
        aws_secret_access_key=SECRET_KEY
    )
    try:
        response = s3_client.generate_presigned_post(bucket_name,
                                                     object_name,
                                                     Fields=fields,
                                                     Conditions=conditions,
                                                     ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL and required fields
    return response


def uploadFile(folderName, fileName):
	# Generate a presigned S3 POST URL
	location = ''
	if folderName and len(folderName) != 0:
		location = f'${folderName}/${fileName}'
	else:
		location = fileName
	response = create_presigned_post(s3BucketName, location)
	if response is None:
			exit(1)
	return response


def lambda_handler(event, context):
    fileUploadPath = uploadFile(event["queryStringParameters"]['folderName'], event["queryStringParameters"]['fileName'])
    return {
        'headers': { 'Content-Type': 'application/json' },
        'statusCode': 200,
        'body': json.dumps(fileUploadPath)
    }
