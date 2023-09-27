/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAssetTable = /* GraphQL */ `
  query GetAssetTable($id: ID!) {
    getAssetTable(id: $id) {
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
export const listAssetTables = /* GraphQL */ `
  query ListAssetTables(
    $filter: ModelAssetTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOption = /* GraphQL */ `
  query GetOption($id: ID!) {
    getOption(id: $id) {
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
export const listOptions = /* GraphQL */ `
  query ListOptions(
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reportBy
        storage
        facility
        assetType
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
