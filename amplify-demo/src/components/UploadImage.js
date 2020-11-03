/* eslint-disable */
import React from 'react';
import './UploadImage.css';
import Amplify from 'aws-amplify';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import Predictions from '@aws-amplify/predictions';
import { createPicture } from '../graphql/mutations';
import awsExports from "../aws-exports";
import awsbucketcredentials from "../aws-bucket-credentials";

Amplify.configure(awsbucketcredentials);
class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }

    addImageToDB = async (image) => {
        console.log('addimage to db')
        try {
            await API.graphql(graphqlOperation(createPicture, { input: image }));
        } catch (error) {
            console.log(error)
        }
    }

    onChange(e) {
        const file = e.target.files[0];
        console.log(file);

        Storage.put(file.name, file, {
            contentType: 'image/png'
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
            this.addImageToDB(image);
            console.log('added completed')
        })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="UploadImage">
                <div>
                    <p>Please select an image to upload</p>
                    <input type="file" onChange={(evt) => this.onChange(evt)} />
                </div>
                <div>
                    <img src={this.state.file} />
                </div>
            </div>
        )
    }
}

export default UploadImage;