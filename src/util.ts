import { API, graphqlOperation } from "aws-amplify";
import { getOption } from "./graphql/queries.ts";
import { updateOption } from "./graphql/mutations.ts";
import { createOption } from "./graphql/mutations.ts";

const apiName = "apiasset";
const path = "/items";

async function getApi() {
    const res = await API.get(apiName, path, {});
    console.log("getApi", res);
}

export interface OptionDataParams {
    id: string;
    reportBy: string;
    storage: string;
    facility: string;
    assetType: string;
}

type getOptionDataRes = {
    data: { getOption: OptionDataParams };
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

export { getApi, getOptionData, setOptionData, createOptionData };
