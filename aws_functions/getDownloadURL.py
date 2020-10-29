import boto3

s3 = boto3.client('s3')
s3BucketName = 'amplify-usecloudfs-dev-182044-deployment'

def getDownloadURL(fileName):
	params = {'Bucket': s3BucketName, 'Key': fileName}
	# By default the link expires in an hour, add expiresIn=numOfSeconds
	link = s3.generate_presigned_url('get_object', Params = params)
	return link

print(getDownloadURL('bro.txt'))