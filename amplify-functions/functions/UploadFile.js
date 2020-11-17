/* eslint-disable */
import React from 'react';
import './UploadFile.css';
import Amplify from 'aws-amplify';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import Predictions from '@aws-amplify/predictions';
import { createTestFile } from '../graphql/mutations';
import awsExports from "../aws-exports";
import awsbucketcredentials from "../aws-bucket-credentials";

Amplify.configure(awsbucketcredentials);

addFileToDB = async (file) => {

    try {
        await API.graphql(graphqlOperation(createTestFile, { input: file }));
        console.log('add file to db')
    } catch (error) {
        console.log(error)
    }
}

const UploadFile = Storage.put(file.name, file, {
    contentType: 'file'
}).then(() => {
    this.setState({ file: URL.createObjectURL(file) })

    const image = {
        name: file.name,
        file: {
            bucket: awsbucketcredentials.aws_user_files_s3_bucket,
            region: awsbucketcredentials.aws_user_files_s3_bucket_region,
            key: file.name
        }
    }

    this.addFileToDB(image);
    console.log('added completed')

})
    .catch(err => console.log(err));

exports.UploadFile = UploadFile; 