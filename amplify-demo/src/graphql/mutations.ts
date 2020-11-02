/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBucket = /* GraphQL */ `
  mutation CreateBucket(
    $input: CreateBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    createBucket(input: $input, condition: $condition) {
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
export const updateBucket = /* GraphQL */ `
  mutation UpdateBucket(
    $input: UpdateBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    updateBucket(input: $input, condition: $condition) {
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
export const deleteBucket = /* GraphQL */ `
  mutation DeleteBucket(
    $input: DeleteBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    deleteBucket(input: $input, condition: $condition) {
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
