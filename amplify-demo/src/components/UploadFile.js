/* eslint-disable */
import React from 'react';
import './UploadFile.css';
import Amplify from 'aws-amplify';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import Predictions from '@aws-amplify/predictions';
import { createPicture } from '../graphql/mutations';
import awsExports from "../aws-exports";
import awsbucketcredentials from "../aws-bucket-credentials";

Amplify.configure(awsbucketcredentials);
class UploadFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }

    addFileToDB = async (file) => {
        console.log('add file to db')
        try {
            await API.graphql(graphqlOperation(createTestFile, { input: file }));
        } catch (error) {
            console.log(error)
        }
    }

    findFileLabels = async (file) => {
        console.log('find file labels');
        return Predictions.identify({
            labels: {
                source: {
                    file,
                },
                type: "LABELS"
            }
        })
            .then(response => {
                let labels = response.labels.map((label) => {
                    if (label.metadata.confidence > 70)
                        return label.name
                });
                return labels.filter(Boolean);
            })
            .catch(err => console.log({ err }));
    }

    onChange(e) {
        const file = e.target.files[0];
        console.log(file);

        Storage.put(file.name, file, {
            contentType: 'file'
        }).then(() => {
            this.findFileLabels(file).then(labels => {
                this.setState({ file: URL.createObjectURL(file) })

                const image = {
                    name: file.name,
                    labels: labels,
                    file: {
                        bucket: awsbucketcredentials.aws_user_files_s3_bucket,
                        region: awsbucketcredentials.aws_user_files_s3_bucket_region,
                        key: file.name
                    }
                }

                this.addFileToDB(image);
                console.log('added completed')
            })
        })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="UploadFile">
                <div>
                    <p>Please select a file to upload</p>
                    <input type="file" onChange={(evt) => this.onChange(evt)} />
                </div>
                <div>
                    <img src={this.state.file} />
                </div>
            </div>
        )
    }
}

export default UploadFile;