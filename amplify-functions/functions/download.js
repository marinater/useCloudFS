/* eslint-disable */
import React from 'react';
import './UploadFile.css';
import Amplify from 'aws-amplify';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import Predictions from '@aws-amplify/predictions';
import { createTestFile } from '../graphql/mutations';
import awsExports from "../aws-exports";
import awsbucketcredentials from "../aws-bucket-credentials";

const AWS = require('aws-sdk')

const s3 = new AWS.S3()
AWS.config.update({ accessKeyId: 'access key', secretAccessKey: 'secret key' })

// const myBucket = 'bucket-name'
// const myKey = 'path/to/your/key/file.extension'
// expiry time 
const signedUrlExpireSeconds = 60 * 5

const url = s3.getSignedUrl('getObject', {
    Bucket: awsbucketcredentials.aws_user_files_s3_bucket,
    Key: file.name,
    Region: awsbucketcredentials.aws_user_files_s3_bucket_region,
    Expires: signedUrlExpireSeconds
})

// Front-end trigger
function download(url) {
    $('<iframe>', { id: 'idown', src: url }).hide().appendTo('body').click();
}
$("#downloadButton").click(function () {
    $.ajax({
        url: 'example.com/your_end_point',
        success: function (url) {
            download(url);
        }
    })
});
