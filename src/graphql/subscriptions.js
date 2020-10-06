/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBucket = /* GraphQL */ `
  subscription OnCreateBucket($owner: String!) {
    onCreateBucket(owner: $owner) {
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
export const onUpdateBucket = /* GraphQL */ `
  subscription OnUpdateBucket($owner: String!) {
    onUpdateBucket(owner: $owner) {
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
export const onDeleteBucket = /* GraphQL */ `
  subscription OnDeleteBucket($owner: String!) {
    onDeleteBucket(owner: $owner) {
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
export const onCreateFiles = /* GraphQL */ `
  subscription OnCreateFiles {
    onCreateFiles {
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
export const onUpdateFiles = /* GraphQL */ `
  subscription OnUpdateFiles {
    onUpdateFiles {
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
export const onDeleteFiles = /* GraphQL */ `
  subscription OnDeleteFiles {
    onDeleteFiles {
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
export const onCreateMetadata = /* GraphQL */ `
  subscription OnCreateMetadata {
    onCreateMetadata {
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
export const onUpdateMetadata = /* GraphQL */ `
  subscription OnUpdateMetadata {
    onUpdateMetadata {
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
export const onDeleteMetadata = /* GraphQL */ `
  subscription OnDeleteMetadata {
    onDeleteMetadata {
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
export const onCreatePermissions = /* GraphQL */ `
  subscription OnCreatePermissions {
    onCreatePermissions {
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
export const onUpdatePermissions = /* GraphQL */ `
  subscription OnUpdatePermissions {
    onUpdatePermissions {
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
export const onDeletePermissions = /* GraphQL */ `
  subscription OnDeletePermissions {
    onDeletePermissions {
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
export const onCreateSubFolders = /* GraphQL */ `
  subscription OnCreateSubFolders {
    onCreateSubFolders {
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
export const onUpdateSubFolders = /* GraphQL */ `
  subscription OnUpdateSubFolders {
    onUpdateSubFolders {
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
export const onDeleteSubFolders = /* GraphQL */ `
  subscription OnDeleteSubFolders {
    onDeleteSubFolders {
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
