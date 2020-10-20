/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFileInput = {
  id?: string | null,
  name: string,
  path: string,
  fileObject?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelFileConditionInput = {
  name?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelFileConditionInput | null > | null,
  or?: Array< ModelFileConditionInput | null > | null,
  not?: ModelFileConditionInput | null,
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

export type UpdateFileInput = {
  id: string,
  name?: string | null,
  path?: string | null,
  fileObject?: S3ObjectInput | null,
};

export type DeleteFileInput = {
  id?: string | null,
};

export type ModelFileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelFileFilterInput | null > | null,
  or?: Array< ModelFileFilterInput | null > | null,
  not?: ModelFileFilterInput | null,
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

export type CreateFileMutationVariables = {
  input: CreateFileInput,
  condition?: ModelFileConditionInput | null,
};

export type CreateFileMutation = {
  createFile:  {
    __typename: "File",
    id: string,
    name: string,
    path: string,
    fileObject:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateFileMutationVariables = {
  input: UpdateFileInput,
  condition?: ModelFileConditionInput | null,
};

export type UpdateFileMutation = {
  updateFile:  {
    __typename: "File",
    id: string,
    name: string,
    path: string,
    fileObject:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteFileMutationVariables = {
  input: DeleteFileInput,
  condition?: ModelFileConditionInput | null,
};

export type DeleteFileMutation = {
  deleteFile:  {
    __typename: "File",
    id: string,
    name: string,
    path: string,
    fileObject:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetFileQueryVariables = {
  id: string,
};

export type GetFileQuery = {
  getFile:  {
    __typename: "File",
    id: string,
    name: string,
    path: string,
    fileObject:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListFilesQueryVariables = {
  filter?: ModelFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilesQuery = {
  listFiles:  {
    __typename: "ModelFileConnection",
    items:  Array< {
      __typename: "File",
      id: string,
      name: string,
      path: string,
      fileObject:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFileSubscriptionVariables = {
  owner: string,
};

export type OnCreateFileSubscription = {
  onCreateFile:  {
    __typename: "File",
    id: string,
    name: string,
    path: string,
    fileObject:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateFileSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFileSubscription = {
  onUpdateFile:  {
    __typename: "File",
    id: string,
    name: string,
    path: string,
    fileObject:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteFileSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFileSubscription = {
  onDeleteFile:  {
    __typename: "File",
    id: string,
    name: string,
    path: string,
    fileObject:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
