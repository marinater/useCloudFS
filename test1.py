import boto3
import json

client = boto3.client('lambda')
print("HELLO WORLD, TEST!")

# From https://alestic.com/2014/11/aws-lambda-cli/
# From https://codeburst.io/aws-lambda-functions-made-easy-1fae0feeab27
role_policy_document = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
iam_client = boto3.client('iam')
iam_client.create_role(
  RoleName='LambdaBasicExecution',
  AssumeRolePolicyDocument=json.dumps(role_policy_document),
)

role = iam_client.get_role(RoleName='LambdaBasicExecution')

with open('test1.zip', 'rb') as f:
  zipped_code = f.read()

response = client.create_function(
    Code={
        'ZipFile': zipped_code
    },
    Description='Test Function Upload.',
    Environment={
        'Variables': {
            'BUCKET': 'userBucket',
            'PREFIX': 'amplify-usecloudfs-dev-182044-deployment',
        },
    },
    FunctionName='test1',
    Handler='index.lambda_handler',
    MemorySize=256,
    Publish=True,
    Role=role['Role']['Arn'],
    Runtime='python3.8',
    Timeout=15
)
