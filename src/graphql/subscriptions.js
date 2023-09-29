/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAssetTable = /* GraphQL */ `
  subscription OnCreateAssetTable(
    $filter: ModelSubscriptionAssetTableFilterInput
    $owner: String
  ) {
    onCreateAssetTable(filter: $filter, owner: $owner) {
      id
      primaryKey
      date
      reportBy
      storage
      facility
      assetType
      type
      owner
      __typename
    }
  }
`;
export const onUpdateAssetTable = /* GraphQL */ `
  subscription OnUpdateAssetTable(
    $filter: ModelSubscriptionAssetTableFilterInput
    $owner: String
  ) {
    onUpdateAssetTable(filter: $filter, owner: $owner) {
      id
      primaryKey
      date
      reportBy
      storage
      facility
      assetType
      type
      owner
      __typename
    }
  }
`;
export const onDeleteAssetTable = /* GraphQL */ `
  subscription OnDeleteAssetTable(
    $filter: ModelSubscriptionAssetTableFilterInput
    $owner: String
  ) {
    onDeleteAssetTable(filter: $filter, owner: $owner) {
      id
      primaryKey
      date
      reportBy
      storage
      facility
      assetType
      type
      owner
      __typename
    }
  }
`;
export const onCreateUploader = /* GraphQL */ `
  subscription OnCreateUploader(
    $filter: ModelSubscriptionUploaderFilterInput
    $owner: String
  ) {
    onCreateUploader(filter: $filter, owner: $owner) {
      id
      reportBy
      code
      owner
      __typename
    }
  }
`;
export const onUpdateUploader = /* GraphQL */ `
  subscription OnUpdateUploader(
    $filter: ModelSubscriptionUploaderFilterInput
    $owner: String
  ) {
    onUpdateUploader(filter: $filter, owner: $owner) {
      id
      reportBy
      code
      owner
      __typename
    }
  }
`;
export const onDeleteUploader = /* GraphQL */ `
  subscription OnDeleteUploader(
    $filter: ModelSubscriptionUploaderFilterInput
    $owner: String
  ) {
    onDeleteUploader(filter: $filter, owner: $owner) {
      id
      reportBy
      code
      owner
      __typename
    }
  }
`;
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption(
    $filter: ModelSubscriptionOptionFilterInput
    $owner: String
  ) {
    onCreateOption(filter: $filter, owner: $owner) {
      id
      reportBy
      storage
      facility
      assetType
      owner
      __typename
    }
  }
`;
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption(
    $filter: ModelSubscriptionOptionFilterInput
    $owner: String
  ) {
    onUpdateOption(filter: $filter, owner: $owner) {
      id
      reportBy
      storage
      facility
      assetType
      owner
      __typename
    }
  }
`;
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption(
    $filter: ModelSubscriptionOptionFilterInput
    $owner: String
  ) {
    onDeleteOption(filter: $filter, owner: $owner) {
      id
      reportBy
      storage
      facility
      assetType
      owner
      __typename
    }
  }
`;
