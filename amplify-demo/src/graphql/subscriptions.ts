/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBucket = /* GraphQL */ `
  subscription OnCreateBucket($owner: String!) {
    onCreateBucket(owner: $owner) {
      id
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
      bucketMetadata {
        items {
          id
          createdAt
          name
          parentFolder
          updatedAt
          owner
        }
        nextToken
      }
      bucketPermissions {
        items {
          id
          autoDelete
          owner
          createdAt
          updatedAt
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
      bucketMetadata {
        items {
          id
          createdAt
          name
          parentFolder
          updatedAt
          owner
        }
        nextToken
      }
      bucketPermissions {
        items {
          id
          autoDelete
          owner
          createdAt
          updatedAt
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
      bucketMetadata {
        items {
          id
          createdAt
          name
          parentFolder
          updatedAt
          owner
        }
        nextToken
      }
      bucketPermissions {
        items {
          id
          autoDelete
          owner
          createdAt
          updatedAt
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
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
export const onCreateMetadata = /* GraphQL */ `
  subscription OnCreateMetadata($owner: String!) {
    onCreateMetadata(owner: $owner) {
      id
      createdAt
      name
      parentFolder
      bucket {
        id
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const onUpdateMetadata = /* GraphQL */ `
  subscription OnUpdateMetadata($owner: String!) {
    onUpdateMetadata(owner: $owner) {
      id
      createdAt
      name
      parentFolder
      bucket {
        id
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const onDeleteMetadata = /* GraphQL */ `
  subscription OnDeleteMetadata($owner: String!) {
    onDeleteMetadata(owner: $owner) {
      id
      createdAt
      name
      parentFolder
      bucket {
        id
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
          nextToken
        }
        bucketSubFolders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const onCreatePermissions = /* GraphQL */ `
  subscription OnCreatePermissions($owner: String!) {
    onCreatePermissions(owner: $owner) {
      id
      autoDelete
      owner
      bucket {
        id
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
    }
  }
`;
export const onUpdatePermissions = /* GraphQL */ `
  subscription OnUpdatePermissions($owner: String!) {
    onUpdatePermissions(owner: $owner) {
      id
      autoDelete
      owner
      bucket {
        id
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
    }
  }
`;
export const onDeletePermissions = /* GraphQL */ `
  subscription OnDeletePermissions($owner: String!) {
    onDeletePermissions(owner: $owner) {
      id
      autoDelete
      owner
      bucket {
        id
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
        bucketFiles {
          nextToken
        }
        bucketMetadata {
          nextToken
        }
        bucketPermissions {
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
