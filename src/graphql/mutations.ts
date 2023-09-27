/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAssetTable = /* GraphQL */ `
  mutation CreateAssetTable(
    $input: CreateAssetTableInput!
    $condition: ModelAssetTableConditionInput
  ) {
    createAssetTable(input: $input, condition: $condition) {
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
export const updateAssetTable = /* GraphQL */ `
  mutation UpdateAssetTable(
    $input: UpdateAssetTableInput!
    $condition: ModelAssetTableConditionInput
  ) {
    updateAssetTable(input: $input, condition: $condition) {
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
export const deleteAssetTable = /* GraphQL */ `
  mutation DeleteAssetTable(
    $input: DeleteAssetTableInput!
    $condition: ModelAssetTableConditionInput
  ) {
    deleteAssetTable(input: $input, condition: $condition) {
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
export const createOption = /* GraphQL */ `
  mutation CreateOption(
    $input: CreateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    createOption(input: $input, condition: $condition) {
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
export const updateOption = /* GraphQL */ `
  mutation UpdateOption(
    $input: UpdateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    updateOption(input: $input, condition: $condition) {
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
export const deleteOption = /* GraphQL */ `
  mutation DeleteOption(
    $input: DeleteOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    deleteOption(input: $input, condition: $condition) {
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
