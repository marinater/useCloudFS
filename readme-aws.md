useCloudFS Hook Integration with AWS
===

# AWS

## Table of Contents
1. [Overview](#Overview)
1. [AmplifyCLI](#AmplifyCLI)
1. [GraphQL](#GraphQL)
1. [DynamoDB](#DynamoDB)
1. [S3](#S3)
1. [Lambda](#Lambda)
1. [Testing](#Testing)

## Overview
### Description

## AmplifyCLI
The Amplify Command Line Interface (CLI) is a unified toolchain to create, integrate, and manage the AWS cloud services.

## GraphQL
### Data modeling with GraphQL
The GraphQL Transform library allows the team to deploy AWS AppSync GraphQL APIs with features like authentication and lambda function resolvers. With the GraphQL Transform, the data model can be defined using the GraphQL Schema Definition Language (SDL). 

```graphql
type File @model @auth(rules: [{allow: owner}]) {
  id: ID!
  name: String
  owner: String
  # reference the s3object type from a field
  file: S3Object
}

type S3Object {
  bucket: String!
  region: String!
  key: String!
}
```

## DynamoDB
- Used to provide an efficient real time view into the filesystem
Storage APIs don’t have a way to see this info directly
Stores folder structure and folder permissions

## S3
- Stores file content
Only accessible through Functions

## Lambda
- Uses S3 REST API:
- Create upload / download links
- Rename / Delete files
- Create / Rename / Delete folders
- Enables connection from Database to Storage

## Testing
### Local Mocking
Amplify supports running a local server for mocking and testing the application before pushing to the cloud with certain categories, including API (AWS AppSync), Storage (Amazon DynamoDB and Amazon S3), Functions (AWS Lambda), and Hosting. After running amplify init you can run the following to start a mock server.
- amplify mock api

