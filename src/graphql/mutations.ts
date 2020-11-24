/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFolder6 = /* GraphQL */ `
  mutation CreateFolder6($folderName: String) {
    createFolder6(folderName: $folderName)
  }
`;
export const createBucket = /* GraphQL */ `
  mutation CreateBucket(
    $input: CreateBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    createBucket(input: $input, condition: $condition) {
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
export const updateBucket = /* GraphQL */ `
  mutation UpdateBucket(
    $input: UpdateBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    updateBucket(input: $input, condition: $condition) {
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
export const deleteBucket = /* GraphQL */ `
  mutation DeleteBucket(
    $input: DeleteBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    deleteBucket(input: $input, condition: $condition) {
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
export const createFiles = /* GraphQL */ `
  mutation CreateFiles(
    $input: CreateFilesInput!
    $condition: ModelFilesConditionInput
  ) {
    createFiles(input: $input, condition: $condition) {
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
export const updateFiles = /* GraphQL */ `
  mutation UpdateFiles(
    $input: UpdateFilesInput!
    $condition: ModelFilesConditionInput
  ) {
    updateFiles(input: $input, condition: $condition) {
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
export const deleteFiles = /* GraphQL */ `
  mutation DeleteFiles(
    $input: DeleteFilesInput!
    $condition: ModelFilesConditionInput
  ) {
    deleteFiles(input: $input, condition: $condition) {
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
export const createMetadata = /* GraphQL */ `
  mutation CreateMetadata(
    $input: CreateMetadataInput!
    $condition: ModelMetadataConditionInput
  ) {
    createMetadata(input: $input, condition: $condition) {
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
export const updateMetadata = /* GraphQL */ `
  mutation UpdateMetadata(
    $input: UpdateMetadataInput!
    $condition: ModelMetadataConditionInput
  ) {
    updateMetadata(input: $input, condition: $condition) {
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
export const deleteMetadata = /* GraphQL */ `
  mutation DeleteMetadata(
    $input: DeleteMetadataInput!
    $condition: ModelMetadataConditionInput
  ) {
    deleteMetadata(input: $input, condition: $condition) {
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
export const createPermissions = /* GraphQL */ `
  mutation CreatePermissions(
    $input: CreatePermissionsInput!
    $condition: ModelPermissionsConditionInput
  ) {
    createPermissions(input: $input, condition: $condition) {
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
export const updatePermissions = /* GraphQL */ `
  mutation UpdatePermissions(
    $input: UpdatePermissionsInput!
    $condition: ModelPermissionsConditionInput
  ) {
    updatePermissions(input: $input, condition: $condition) {
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
export const deletePermissions = /* GraphQL */ `
  mutation DeletePermissions(
    $input: DeletePermissionsInput!
    $condition: ModelPermissionsConditionInput
  ) {
    deletePermissions(input: $input, condition: $condition) {
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
export const createSubFolders = /* GraphQL */ `
  mutation CreateSubFolders(
    $input: CreateSubFoldersInput!
    $condition: ModelSubFoldersConditionInput
  ) {
    createSubFolders(input: $input, condition: $condition) {
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
export const updateSubFolders = /* GraphQL */ `
  mutation UpdateSubFolders(
    $input: UpdateSubFoldersInput!
    $condition: ModelSubFoldersConditionInput
  ) {
    updateSubFolders(input: $input, condition: $condition) {
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
export const deleteSubFolders = /* GraphQL */ `
  mutation DeleteSubFolders(
    $input: DeleteSubFoldersInput!
    $condition: ModelSubFoldersConditionInput
  ) {
    deleteSubFolders(input: $input, condition: $condition) {
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
