/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBucket = /* GraphQL */ `
  query GetBucket($id: ID!) {
    getBucket(id: $id) {
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
export const listBuckets = /* GraphQL */ `
  query ListBuckets(
    $filter: ModelBucketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuckets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFiles = /* GraphQL */ `
  query GetFiles($id: ID!) {
    getFiles(id: $id) {
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
export const listFiless = /* GraphQL */ `
  query ListFiless(
    $filter: ModelFilesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiless(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bucket {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSubFolders = /* GraphQL */ `
  query GetSubFolders($id: ID!) {
    getSubFolders(id: $id) {
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
export const listSubFolderss = /* GraphQL */ `
  query ListSubFolderss(
    $filter: ModelSubFoldersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubFolderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bucket {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
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
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
