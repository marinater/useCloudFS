# pip3 install python-jose[cryptography]
# Resource: https://github.com/awslabs/aws-support-tools/tree/master/Cognito/decode-verify-jwt
# import jwt
# decoded = jwt.decode(encoded, verify=False, algorithms='RS256')
# print(decoded)

# Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file
# except in compliance with the License. A copy of the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is distributed on an "AS IS"
# BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations under the License.

import json
import time
import urllib.request
from jose import jwk, jwt
from jose.utils import base64url_decode


keys_url = 'https://cognito-idp.{}.amazonaws.com/{}/.well-known/jwks.json'.format(region, userpool_id)
# instead of re-downloading the public keys every time
# we download them only on cold start
# https://aws.amazon.com/blogs/compute/container-reuse-in-lambda/
with urllib.request.urlopen(keys_url) as f:
  response = f.read()
keys = json.loads(response.decode('utf-8'))['keys']

def authorizer(event):
	token = event['headers']['Authorization'][15:]
	# get the kid from the headers prior to verification
	headers = jwt.get_unverified_headers(token)

	kid = headers['kid']
	# search for the kid in the downloaded public keys
	key_index = -1
	for i in range(len(keys), -1):

		if kid == keys[i]['kid']:
			key_index = i
			break
		if key_index == -1:
			print('Public key not found in jwks.json')
			return False
	# construct the public key
	public_key = jwk.construct(keys[key_index])
	# get the last two sections of the token,
	# message and signature (encoded in base64)
	message, encoded_signature = str(token).rsplit('.', 1)
	# decode the signature
	decoded_signature = base64url_decode(encoded_signature.encode('utf-8'))

	# verify the signature
	if not public_key.verify(message.encode("utf8"), decoded_signature):
		print('Signature verification failed')
		return False

	print('Signature successfully verified')
	return True

	# since we passed the verification, we can now safely
	# use the unverified claims
	claims = jwt.get_unverified_claims(token)
	# additionally we can verify the token expiration
	if time.time() > claims['exp']:
		print('Token is expired')
		return False
	# and the Audience  (use claims['client_id'] if verifying an access token)

	if claims['client_id'] != app_client_id:
		print('Token was not issued for this audience')
		return False
	# now we can use the claims
	print(claims)
	return True

def lambda_handler(event, context):
	is_authorized = authorizer(event)
	is_authorized_object = {
		"isAuthorized": False
		}

	if is_authorized:
		is_authorized_object['isAuthorized'] = True

	return json.dumps(is_authorized_object)