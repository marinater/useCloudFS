# User set up instructions
## 1. Start the downloading necessary packages
Run the command `yarn config:amplify`
## 2. Set up amplify project
? Enter a name for the project useCloudFS
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
## 3. Register and log in as IAM user
? Do you want to use an AWS profile? No
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  us-east-1

## Add dynamnodb
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? You need to add auth (Amazon Cognito) to your project in order to add storage for user files. Do you want to add au
th now? Yes
Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.

## Add S3 Storage
? Please provide a friendly name for your resource that will be used to label this category in the project: useCloudFSProject
? Please provide bucket name: usecloudfsc59f10979622411784a81271197fa1d4
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? create/update, read, delete
? Do you want to add a Lambda Trigger for your S3 Bucket? Yes
? Select from the following options Create a new function
Successfully added resource S3Trigger1e0f16e5 locally
? Do you want to edit the local S3Trigger1e0f16e5 lambda function now? No
Successfully added resource useCloudFSProject locally

## Add GraphQL API
? Please select from one of the below mentioned services: GraphQL
? Provide API name: usecloudfs
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: One-to-many relationship (e.g., “Blogs” with “Posts” and “Comments”)
