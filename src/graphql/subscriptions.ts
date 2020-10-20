/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile($owner: String!) {
    onCreateFile(owner: $owner) {
      id
      name
      path
      fileObject {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile($owner: String!) {
    onUpdateFile(owner: $owner) {
      id
      name
      path
      fileObject {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile($owner: String!) {
    onDeleteFile(owner: $owner) {
      id
      name
      path
      fileObject {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
