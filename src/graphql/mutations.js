/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBucket = /* GraphQL */ `
  mutation CreateBucket(
    $input: CreateBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    createBucket(input: $input, condition: $condition) {
      id
      counter
      bucketFiles {
        items {
          id
          name
          createdAt
          updatedAt
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
        }
        nextToken
      }
      editors
      readers
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
      counter
      bucketFiles {
        items {
          id
          name
          createdAt
          updatedAt
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
        }
        nextToken
      }
      editors
      readers
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
      counter
      bucketFiles {
        items {
          id
          name
          createdAt
          updatedAt
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
        }
        nextToken
      }
      editors
      readers
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      updatedAt
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      updatedAt
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      updatedAt
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
        counter
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
        editors
        readers
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
        counter
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
        editors
        readers
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
        counter
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
        editors
        readers
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        counter
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
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
