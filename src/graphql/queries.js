/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBucket = /* GraphQL */ `
  query GetBucket($id: ID!) {
    getBucket(id: $id) {
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
export const listBuckets = /* GraphQL */ `
  query ListBuckets(
    $filter: ModelBucketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuckets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const getMetadata = /* GraphQL */ `
  query GetMetadata($id: ID!) {
    getMetadata(id: $id) {
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
export const listMetadatas = /* GraphQL */ `
  query ListMetadatas(
    $filter: ModelMetadataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetadatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        name
        parentFolder
        bucket {
          id
          createdAt
          updatedAt
          owner
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPermissions = /* GraphQL */ `
  query GetPermissions($id: ID!) {
    getPermissions(id: $id) {
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
export const listPermissionss = /* GraphQL */ `
  query ListPermissionss(
    $filter: ModelPermissionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPermissionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        autoDelete
        owner
        bucket {
          id
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
