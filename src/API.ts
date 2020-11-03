/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBucketInput = {
  id?: string | null,
  name: string,
};

export type ModelBucketConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBucketConditionInput | null > | null,
  or?: Array< ModelBucketConditionInput | null > | null,
  not?: ModelBucketConditionInput | null,
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

export type UpdateBucketInput = {
  name?: string | null,
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

export type UpdateFilesInput = {
  id: string,
  name?: string | null,
  filesBucketId?: string | null,
};

export type DeleteFilesInput = {
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

export type CreatePictureInput = {
  id?: string | null,
  name?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelPictureConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPictureConditionInput | null > | null,
  or?: Array< ModelPictureConditionInput | null > | null,
  not?: ModelPictureConditionInput | null,
};

export type UpdatePictureInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
};

export type DeletePictureInput = {
  id?: string | null,
};

export type CreateTestFileInput = {
  id?: string | null,
  name?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
};

export type ModelTestFileConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTestFileConditionInput | null > | null,
  or?: Array< ModelTestFileConditionInput | null > | null,
  not?: ModelTestFileConditionInput | null,
};

export type UpdateTestFileInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
};

export type DeleteTestFileInput = {
  id?: string | null,
};

export type ModelBucketFilterInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBucketFilterInput | null > | null,
  or?: Array< ModelBucketFilterInput | null > | null,
  not?: ModelBucketFilterInput | null,
};

export type ModelFilesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFilesFilterInput | null > | null,
  or?: Array< ModelFilesFilterInput | null > | null,
  not?: ModelFilesFilterInput | null,
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

export type ModelSubFoldersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubFoldersFilterInput | null > | null,
  or?: Array< ModelSubFoldersFilterInput | null > | null,
  not?: ModelSubFoldersFilterInput | null,
};

export type ModelPictureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPictureFilterInput | null > | null,
  or?: Array< ModelPictureFilterInput | null > | null,
  not?: ModelPictureFilterInput | null,
};

export type ModelTestFileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTestFileFilterInput | null > | null,
  or?: Array< ModelTestFileFilterInput | null > | null,
  not?: ModelTestFileFilterInput | null,
};

export type CreateBucketMutationVariables = {
  input: CreateBucketInput,
  condition?: ModelBucketConditionInput | null,
};

export type CreateBucketMutation = {
  createBucket:  {
    __typename: "Bucket",
    id: string,
    name: string,
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
    name: string,
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
    name: string,
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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

export type CreatePictureMutationVariables = {
  input: CreatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type CreatePictureMutation = {
  createPicture:  {
    __typename: "Picture",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePictureMutationVariables = {
  input: UpdatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type UpdatePictureMutation = {
  updatePicture:  {
    __typename: "Picture",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePictureMutationVariables = {
  input: DeletePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type DeletePictureMutation = {
  deletePicture:  {
    __typename: "Picture",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTestFileMutationVariables = {
  input: CreateTestFileInput,
  condition?: ModelTestFileConditionInput | null,
};

export type CreateTestFileMutation = {
  createTestFile:  {
    __typename: "TestFile",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTestFileMutationVariables = {
  input: UpdateTestFileInput,
  condition?: ModelTestFileConditionInput | null,
};

export type UpdateTestFileMutation = {
  updateTestFile:  {
    __typename: "TestFile",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTestFileMutationVariables = {
  input: DeleteTestFileInput,
  condition?: ModelTestFileConditionInput | null,
};

export type DeleteTestFileMutation = {
  deleteTestFile:  {
    __typename: "TestFile",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBucketQueryVariables = {
  id: string,
};

export type GetBucketQuery = {
  getBucket:  {
    __typename: "Bucket",
    id: string,
    name: string,
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
        name: string,
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
        name: string,
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

export type GetPictureQueryVariables = {
  id: string,
};

export type GetPictureQuery = {
  getPicture:  {
    __typename: "Picture",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPicturesQueryVariables = {
  filter?: ModelPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPicturesQuery = {
  listPictures:  {
    __typename: "ModelPictureConnection",
    items:  Array< {
      __typename: "Picture",
      id: string,
      name: string | null,
      owner: string | null,
      file:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestFileQueryVariables = {
  id: string,
};

export type GetTestFileQuery = {
  getTestFile:  {
    __typename: "TestFile",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTestFilesQueryVariables = {
  filter?: ModelTestFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestFilesQuery = {
  listTestFiles:  {
    __typename: "ModelTestFileConnection",
    items:  Array< {
      __typename: "TestFile",
      id: string,
      name: string | null,
      owner: string | null,
      file:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    name: string,
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
    name: string,
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
    name: string,
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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
      name: string,
      bucketFiles:  {
        __typename: "ModelFilesConnection",
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

export type OnCreatePictureSubscriptionVariables = {
  owner: string,
};

export type OnCreatePictureSubscription = {
  onCreatePicture:  {
    __typename: "Picture",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePictureSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePictureSubscription = {
  onUpdatePicture:  {
    __typename: "Picture",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePictureSubscriptionVariables = {
  owner: string,
};

export type OnDeletePictureSubscription = {
  onDeletePicture:  {
    __typename: "Picture",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTestFileSubscriptionVariables = {
  owner: string,
};

export type OnCreateTestFileSubscription = {
  onCreateTestFile:  {
    __typename: "TestFile",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTestFileSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTestFileSubscription = {
  onUpdateTestFile:  {
    __typename: "TestFile",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTestFileSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTestFileSubscription = {
  onDeleteTestFile:  {
    __typename: "TestFile",
    id: string,
    name: string | null,
    owner: string | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
