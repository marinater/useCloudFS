/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBucket = /* GraphQL */ `
  subscription OnCreateBucket($owner: String!) {
    onCreateBucket(owner: $owner) {
      id
      name
      bucketFiles {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bucketSubFolders {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBucket = /* GraphQL */ `
  subscription OnUpdateBucket($owner: String!) {
    onUpdateBucket(owner: $owner) {
      id
      name
      bucketFiles {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bucketSubFolders {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBucket = /* GraphQL */ `
  subscription OnDeleteBucket($owner: String!) {
    onDeleteBucket(owner: $owner) {
      id
      name
      bucketFiles {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bucketSubFolders {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFiles = /* GraphQL */ `
  subscription OnCreateFiles($owner: String!) {
    onCreateFiles(owner: $owner) {
      id
      name
      bucket {
        id
        name
        bucketFiles {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFiles = /* GraphQL */ `
  subscription OnUpdateFiles($owner: String!) {
    onUpdateFiles(owner: $owner) {
      id
      name
      bucket {
        id
        name
        bucketFiles {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFiles = /* GraphQL */ `
  subscription OnDeleteFiles($owner: String!) {
    onDeleteFiles(owner: $owner) {
      id
      name
      bucket {
        id
        name
        bucketFiles {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSubFolders = /* GraphQL */ `
  subscription OnCreateSubFolders($owner: String!) {
    onCreateSubFolders(owner: $owner) {
      id
      name
      bucket {
        id
        name
        bucketFiles {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSubFolders = /* GraphQL */ `
  subscription OnUpdateSubFolders($owner: String!) {
    onUpdateSubFolders(owner: $owner) {
      id
      name
      bucket {
        id
        name
        bucketFiles {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSubFolders = /* GraphQL */ `
  subscription OnDeleteSubFolders($owner: String!) {
    onDeleteSubFolders(owner: $owner) {
      id
      name
      bucket {
        id
        name
        bucketFiles {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String!) {
    onCreatePicture(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String!) {
    onUpdatePicture(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String!) {
    onDeletePicture(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
