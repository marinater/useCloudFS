/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBucketInput = {
  id?: string | null,
};

export type ModelBucketConditionInput = {
  and?: Array< ModelBucketConditionInput | null > | null,
  or?: Array< ModelBucketConditionInput | null > | null,
  not?: ModelBucketConditionInput | null,
};

export type UpdateBucketInput = {
  id: string,
};

export type DeleteBucketInput = {
  id?: string | null,
};

export type CreateFilesInput = {
  id?: string | null,
  name?: string | null,
  filesBucketId?: string | null,
};

export type ModelFilesConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFilesConditionInput | null > | null,
  or?: Array< ModelFilesConditionInput | null > | null,
  not?: ModelFilesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateFilesInput = {
  id: string,
  name?: string | null,
  filesBucketId?: string | null,
};

export type DeleteFilesInput = {
  id?: string | null,
};

export type CreateMetadataInput = {
  id?: string | null,
  createdAt?: string | null,
  name: string,
  parentFolder: string,
  metadataBucketId?: string | null,
};

export type ModelMetadataConditionInput = {
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  parentFolder?: ModelStringInput | null,
  and?: Array< ModelMetadataConditionInput | null > | null,
  or?: Array< ModelMetadataConditionInput | null > | null,
  not?: ModelMetadataConditionInput | null,
};

export type UpdateMetadataInput = {
  id: string,
  createdAt?: string | null,
  name?: string | null,
  parentFolder?: string | null,
  metadataBucketId?: string | null,
};

export type DeleteMetadataInput = {
  id?: string | null,
};

export type CreatePermissionsInput = {
  id?: string | null,
  autoDelete?: number | null,
  owner: string,
  permissionsBucketId?: string | null,
};

export type ModelPermissionsConditionInput = {
  autoDelete?: ModelIntInput | null,
  and?: Array< ModelPermissionsConditionInput | null > | null,
  or?: Array< ModelPermissionsConditionInput | null > | null,
  not?: ModelPermissionsConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePermissionsInput = {
  id: string,
  autoDelete?: number | null,
  owner?: string | null,
  permissionsBucketId?: string | null,
};

export type DeletePermissionsInput = {
  id?: string | null,
};

export type CreateSubFoldersInput = {
  id?: string | null,
  name: string,
  subFoldersBucketId?: string | null,
};

export type ModelSubFoldersConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubFoldersConditionInput | null > | null,
  or?: Array< ModelSubFoldersConditionInput | null > | null,
  not?: ModelSubFoldersConditionInput | null,
};

export type UpdateSubFoldersInput = {
  id: string,
  name?: string | null,
  subFoldersBucketId?: string | null,
};

export type DeleteSubFoldersInput = {
  id?: string | null,
};

export type ModelBucketFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelBucketFilterInput | null > | null,
  or?: Array< ModelBucketFilterInput | null > | null,
  not?: ModelBucketFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFilesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFilesFilterInput | null > | null,
  or?: Array< ModelFilesFilterInput | null > | null,
  not?: ModelFilesFilterInput | null,
};

export type ModelMetadataFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  parentFolder?: ModelStringInput | null,
  and?: Array< ModelMetadataFilterInput | null > | null,
  or?: Array< ModelMetadataFilterInput | null > | null,
  not?: ModelMetadataFilterInput | null,
};

export type ModelPermissionsFilterInput = {
  id?: ModelIDInput | null,
  autoDelete?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPermissionsFilterInput | null > | null,
  or?: Array< ModelPermissionsFilterInput | null > | null,
  not?: ModelPermissionsFilterInput | null,
};

export type ModelSubFoldersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubFoldersFilterInput | null > | null,
  or?: Array< ModelSubFoldersFilterInput | null > | null,
  not?: ModelSubFoldersFilterInput | null,
};

export type CreateFolderMutationVariables = {
  folderName?: string | null,
};

export type CreateFolderMutation = {
  createFolder: string | null,
};

export type CreateBucketMutationVariables = {
  input: CreateBucketInput,
  condition?: ModelBucketConditionInput | null,
};

export type CreateBucketMutation = {
  createBucket:  {
    __typename: "Bucket",
    id: string,
    bucketFiles:  {
      __typename: "ModelFilesConnection",
      items:  Array< {
        __typename: "Files",
        id: string,
        name: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketMetadata:  {
      __typename: "ModelMetadataConnection",
      items:  Array< {
        __typename: "Metadata",
        id: string,
        createdAt: string,
        name: string,
        parentFolder: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketPermissions:  {
      __typename: "ModelPermissionsConnection",
      items:  Array< {
        __typename: "Permissions",
        id: string,
        autoDelete: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketSubFolders:  {
      __typename: "ModelSubFoldersConnection",
      items:  Array< {
        __typename: "SubFolders",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateBucketMutationVariables = {
  input: UpdateBucketInput,
  condition?: ModelBucketConditionInput | null,
};

export type UpdateBucketMutation = {
  updateBucket:  {
    __typename: "Bucket",
    id: string,
    bucketFiles:  {
      __typename: "ModelFilesConnection",
      items:  Array< {
        __typename: "Files",
        id: string,
        name: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketMetadata:  {
      __typename: "ModelMetadataConnection",
      items:  Array< {
        __typename: "Metadata",
        id: string,
        createdAt: string,
        name: string,
        parentFolder: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketPermissions:  {
      __typename: "ModelPermissionsConnection",
      items:  Array< {
        __typename: "Permissions",
        id: string,
        autoDelete: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketSubFolders:  {
      __typename: "ModelSubFoldersConnection",
      items:  Array< {
        __typename: "SubFolders",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteBucketMutationVariables = {
  input: DeleteBucketInput,
  condition?: ModelBucketConditionInput | null,
};

export type DeleteBucketMutation = {
  deleteBucket:  {
    __typename: "Bucket",
    id: string,
    bucketFiles:  {
      __typename: "ModelFilesConnection",
      items:  Array< {
        __typename: "Files",
        id: string,
        name: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketMetadata:  {
      __typename: "ModelMetadataConnection",
      items:  Array< {
        __typename: "Metadata",
        id: string,
        createdAt: string,
        name: string,
        parentFolder: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketPermissions:  {
      __typename: "ModelPermissionsConnection",
      items:  Array< {
        __typename: "Permissions",
        id: string,
        autoDelete: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketSubFolders:  {
      __typename: "ModelSubFoldersConnection",
      items:  Array< {
        __typename: "SubFolders",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateFilesMutationVariables = {
  input: CreateFilesInput,
  condition?: ModelFilesConditionInput | null,
};

export type CreateFilesMutation = {
  createFiles:  {
    __typename: "Files",
    id: string,
    name: string | null,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateFilesMutationVariables = {
  input: UpdateFilesInput,
  condition?: ModelFilesConditionInput | null,
};

export type UpdateFilesMutation = {
  updateFiles:  {
    __typename: "Files",
    id: string,
    name: string | null,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteFilesMutationVariables = {
  input: DeleteFilesInput,
  condition?: ModelFilesConditionInput | null,
};

export type DeleteFilesMutation = {
  deleteFiles:  {
    __typename: "Files",
    id: string,
    name: string | null,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateMetadataMutationVariables = {
  input: CreateMetadataInput,
  condition?: ModelMetadataConditionInput | null,
};

export type CreateMetadataMutation = {
  createMetadata:  {
    __typename: "Metadata",
    id: string,
    createdAt: string,
    name: string,
    parentFolder: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateMetadataMutationVariables = {
  input: UpdateMetadataInput,
  condition?: ModelMetadataConditionInput | null,
};

export type UpdateMetadataMutation = {
  updateMetadata:  {
    __typename: "Metadata",
    id: string,
    createdAt: string,
    name: string,
    parentFolder: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteMetadataMutationVariables = {
  input: DeleteMetadataInput,
  condition?: ModelMetadataConditionInput | null,
};

export type DeleteMetadataMutation = {
  deleteMetadata:  {
    __typename: "Metadata",
    id: string,
    createdAt: string,
    name: string,
    parentFolder: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreatePermissionsMutationVariables = {
  input: CreatePermissionsInput,
  condition?: ModelPermissionsConditionInput | null,
};

export type CreatePermissionsMutation = {
  createPermissions:  {
    __typename: "Permissions",
    id: string,
    autoDelete: number | null,
    owner: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePermissionsMutationVariables = {
  input: UpdatePermissionsInput,
  condition?: ModelPermissionsConditionInput | null,
};

export type UpdatePermissionsMutation = {
  updatePermissions:  {
    __typename: "Permissions",
    id: string,
    autoDelete: number | null,
    owner: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePermissionsMutationVariables = {
  input: DeletePermissionsInput,
  condition?: ModelPermissionsConditionInput | null,
};

export type DeletePermissionsMutation = {
  deletePermissions:  {
    __typename: "Permissions",
    id: string,
    autoDelete: number | null,
    owner: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubFoldersMutationVariables = {
  input: CreateSubFoldersInput,
  condition?: ModelSubFoldersConditionInput | null,
};

export type CreateSubFoldersMutation = {
  createSubFolders:  {
    __typename: "SubFolders",
    id: string,
    name: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateSubFoldersMutationVariables = {
  input: UpdateSubFoldersInput,
  condition?: ModelSubFoldersConditionInput | null,
};

export type UpdateSubFoldersMutation = {
  updateSubFolders:  {
    __typename: "SubFolders",
    id: string,
    name: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteSubFoldersMutationVariables = {
  input: DeleteSubFoldersInput,
  condition?: ModelSubFoldersConditionInput | null,
};

export type DeleteSubFoldersMutation = {
  deleteSubFolders:  {
    __typename: "SubFolders",
    id: string,
    name: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetBucketQueryVariables = {
  id: string,
};

export type GetBucketQuery = {
  getBucket:  {
    __typename: "Bucket",
    id: string,
    bucketFiles:  {
      __typename: "ModelFilesConnection",
      items:  Array< {
        __typename: "Files",
        id: string,
        name: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketMetadata:  {
      __typename: "ModelMetadataConnection",
      items:  Array< {
        __typename: "Metadata",
        id: string,
        createdAt: string,
        name: string,
        parentFolder: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketPermissions:  {
      __typename: "ModelPermissionsConnection",
      items:  Array< {
        __typename: "Permissions",
        id: string,
        autoDelete: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketSubFolders:  {
      __typename: "ModelSubFoldersConnection",
      items:  Array< {
        __typename: "SubFolders",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListBucketsQueryVariables = {
  filter?: ModelBucketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBucketsQuery = {
  listBuckets:  {
    __typename: "ModelBucketConnection",
    items:  Array< {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFilesQueryVariables = {
  id: string,
};

export type GetFilesQuery = {
  getFiles:  {
    __typename: "Files",
    id: string,
    name: string | null,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListFilessQueryVariables = {
  filter?: ModelFilesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilessQuery = {
  listFiless:  {
    __typename: "ModelFilesConnection",
    items:  Array< {
      __typename: "Files",
      id: string,
      name: string | null,
      bucket:  {
        __typename: "Bucket",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMetadataQueryVariables = {
  id: string,
};

export type GetMetadataQuery = {
  getMetadata:  {
    __typename: "Metadata",
    id: string,
    createdAt: string,
    name: string,
    parentFolder: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListMetadatasQueryVariables = {
  filter?: ModelMetadataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMetadatasQuery = {
  listMetadatas:  {
    __typename: "ModelMetadataConnection",
    items:  Array< {
      __typename: "Metadata",
      id: string,
      createdAt: string,
      name: string,
      parentFolder: string,
      bucket:  {
        __typename: "Bucket",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPermissionsQueryVariables = {
  id: string,
};

export type GetPermissionsQuery = {
  getPermissions:  {
    __typename: "Permissions",
    id: string,
    autoDelete: number | null,
    owner: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPermissionssQueryVariables = {
  filter?: ModelPermissionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPermissionssQuery = {
  listPermissionss:  {
    __typename: "ModelPermissionsConnection",
    items:  Array< {
      __typename: "Permissions",
      id: string,
      autoDelete: number | null,
      owner: string,
      bucket:  {
        __typename: "Bucket",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSubFoldersQueryVariables = {
  id: string,
};

export type GetSubFoldersQuery = {
  getSubFolders:  {
    __typename: "SubFolders",
    id: string,
    name: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListSubFolderssQueryVariables = {
  filter?: ModelSubFoldersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubFolderssQuery = {
  listSubFolderss:  {
    __typename: "ModelSubFoldersConnection",
    items:  Array< {
      __typename: "SubFolders",
      id: string,
      name: string,
      bucket:  {
        __typename: "Bucket",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBucketSubscriptionVariables = {
  owner: string,
};

export type OnCreateBucketSubscription = {
  onCreateBucket:  {
    __typename: "Bucket",
    id: string,
    bucketFiles:  {
      __typename: "ModelFilesConnection",
      items:  Array< {
        __typename: "Files",
        id: string,
        name: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketMetadata:  {
      __typename: "ModelMetadataConnection",
      items:  Array< {
        __typename: "Metadata",
        id: string,
        createdAt: string,
        name: string,
        parentFolder: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketPermissions:  {
      __typename: "ModelPermissionsConnection",
      items:  Array< {
        __typename: "Permissions",
        id: string,
        autoDelete: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketSubFolders:  {
      __typename: "ModelSubFoldersConnection",
      items:  Array< {
        __typename: "SubFolders",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateBucketSubscriptionVariables = {
  owner: string,
};

export type OnUpdateBucketSubscription = {
  onUpdateBucket:  {
    __typename: "Bucket",
    id: string,
    bucketFiles:  {
      __typename: "ModelFilesConnection",
      items:  Array< {
        __typename: "Files",
        id: string,
        name: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketMetadata:  {
      __typename: "ModelMetadataConnection",
      items:  Array< {
        __typename: "Metadata",
        id: string,
        createdAt: string,
        name: string,
        parentFolder: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketPermissions:  {
      __typename: "ModelPermissionsConnection",
      items:  Array< {
        __typename: "Permissions",
        id: string,
        autoDelete: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketSubFolders:  {
      __typename: "ModelSubFoldersConnection",
      items:  Array< {
        __typename: "SubFolders",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteBucketSubscriptionVariables = {
  owner: string,
};

export type OnDeleteBucketSubscription = {
  onDeleteBucket:  {
    __typename: "Bucket",
    id: string,
    bucketFiles:  {
      __typename: "ModelFilesConnection",
      items:  Array< {
        __typename: "Files",
        id: string,
        name: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketMetadata:  {
      __typename: "ModelMetadataConnection",
      items:  Array< {
        __typename: "Metadata",
        id: string,
        createdAt: string,
        name: string,
        parentFolder: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketPermissions:  {
      __typename: "ModelPermissionsConnection",
      items:  Array< {
        __typename: "Permissions",
        id: string,
        autoDelete: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bucketSubFolders:  {
      __typename: "ModelSubFoldersConnection",
      items:  Array< {
        __typename: "SubFolders",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateFilesSubscriptionVariables = {
  owner: string,
};

export type OnCreateFilesSubscription = {
  onCreateFiles:  {
    __typename: "Files",
    id: string,
    name: string | null,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateFilesSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFilesSubscription = {
  onUpdateFiles:  {
    __typename: "Files",
    id: string,
    name: string | null,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteFilesSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFilesSubscription = {
  onDeleteFiles:  {
    __typename: "Files",
    id: string,
    name: string | null,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateMetadataSubscriptionVariables = {
  owner: string,
};

export type OnCreateMetadataSubscription = {
  onCreateMetadata:  {
    __typename: "Metadata",
    id: string,
    createdAt: string,
    name: string,
    parentFolder: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateMetadataSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMetadataSubscription = {
  onUpdateMetadata:  {
    __typename: "Metadata",
    id: string,
    createdAt: string,
    name: string,
    parentFolder: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteMetadataSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMetadataSubscription = {
  onDeleteMetadata:  {
    __typename: "Metadata",
    id: string,
    createdAt: string,
    name: string,
    parentFolder: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreatePermissionsSubscriptionVariables = {
  owner: string,
};

export type OnCreatePermissionsSubscription = {
  onCreatePermissions:  {
    __typename: "Permissions",
    id: string,
    autoDelete: number | null,
    owner: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePermissionsSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePermissionsSubscription = {
  onUpdatePermissions:  {
    __typename: "Permissions",
    id: string,
    autoDelete: number | null,
    owner: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePermissionsSubscriptionVariables = {
  owner: string,
};

export type OnDeletePermissionsSubscription = {
  onDeletePermissions:  {
    __typename: "Permissions",
    id: string,
    autoDelete: number | null,
    owner: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubFoldersSubscriptionVariables = {
  owner: string,
};

export type OnCreateSubFoldersSubscription = {
  onCreateSubFolders:  {
    __typename: "SubFolders",
    id: string,
    name: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateSubFoldersSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSubFoldersSubscription = {
  onUpdateSubFolders:  {
    __typename: "SubFolders",
    id: string,
    name: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteSubFoldersSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSubFoldersSubscription = {
  onDeleteSubFolders:  {
    __typename: "SubFolders",
    id: string,
    name: string,
    bucket:  {
      __typename: "Bucket",
      id: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
        nextToken: string | null,
      } | null,
      bucketMetadata:  {
        __typename: "ModelMetadataConnection",
        nextToken: string | null,
      } | null,
      bucketPermissions:  {
        __typename: "ModelPermissionsConnection",
        nextToken: string | null,
      } | null,
      bucketSubFolders:  {
        __typename: "ModelSubFoldersConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
