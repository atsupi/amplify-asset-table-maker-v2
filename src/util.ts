import { API, graphqlOperation } from "aws-amplify";
import { getOption, listAssetTables } from "./graphql/queries";
import { updateOption } from "./graphql/mutations";
import { createOption } from "./graphql/mutations";
import { listUploaders } from "./graphql/queries";
import { createUploader } from "./graphql/mutations";

const apiName = "apiasset";
const path = "/items";

async function getApi() {
    const res = await API.get(apiName, path, {});
    console.log("getApi", res);
}

export interface PostApiParams {
    data: any,
    option: any,
}

async function postApi(params: PostApiParams) {
    const myInit = {
        body: params,
        header: {},
    }
    const res = await API.post(apiName, path, myInit);
    console.log("postApi", res);
}

export interface AssetTablesData {
    id: string;
    reportBy: string;
    facility: string;
    storage: string;
    date: string;
    primaryKey: string;
    assetType: string;
    type: string;
}
  
export interface AssetTablesRes {
  data: { listAssetTables: { items: Array<AssetTablesData>} }
}

async function queryAssetTables () {
    try {
        const assetTables: Promise<AssetTablesRes> = <Promise<AssetTablesRes>>await API.graphql(graphqlOperation(listAssetTables));
        if (assetTables === undefined) return undefined;
        console.log('queryAssetTables', assetTables);
        return (await assetTables).data.listAssetTables.items;
    } catch (err) {
        console.log("Error: queryUploaders", err);
    }
}

export interface OptionDataParams {
    id: string;
    reportBy: string;
    storage: string;
    facility: string;
    assetType: string;
}

export interface UploaderDataParams {
    id: string;
    reportBy: string;
    code: string;
}

export interface ListUploaderDataParamas {
    items: [UploaderDataParams];
}

type getOptionDataRes = {
    data: { getOption: OptionDataParams };
}

type UploaderDataRes = {
    data: { listUploaders: ListUploaderDataParamas };
}

async function getOptionData(key: string) {
    try {
        const res: Promise<getOptionDataRes> = <Promise<getOptionDataRes>>await API.graphql(
            graphqlOperation(getOption, { id: key })
        );
        if (res === undefined) return undefined;
        return (await res).data.getOption;
    } catch (err) {
        console.log("Error: getOptionData", err);
    }
}

async function setOptionData(params: OptionDataParams) {
    try {
        await API.graphql(
            graphqlOperation(updateOption, { input: params })
        );
    } catch (err) {
        console.log("Error: setOptionData", err);
    }
}

async function createOptionData(params: OptionDataParams) {
    try {
        await API.graphql(
            graphqlOperation(createOption, { input: params })
        );
    } catch (err) {
        console.log("Error: createOptionData", err);
    }
}

async function createCode(params: UploaderDataParams) {
    try {
        await API.graphql(
            graphqlOperation(createUploader, { input: params })
        );
    } catch (err) {
        console.log("Error: createCode", err);
    }
}

async function queryUploaders() {
    try {
        const uploaders: Promise<UploaderDataRes> = <Promise<UploaderDataRes>>await API.graphql(graphqlOperation(listUploaders));
        if (uploaders === undefined) return undefined;
        return (await uploaders).data.listUploaders;
    } catch (err) {
        console.log("Error: queryUploaders", err);
    }
}

export { getApi, postApi, queryAssetTables, getOptionData, setOptionData, createOptionData, createCode, queryUploaders  };
