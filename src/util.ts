import { API } from "aws-amplify";

const apiName = "apiasset";
const path = "/items";

async function getApi() {
    console.log("getApi");
    const res = await API.get(apiName, path, {});
    console.log(res);
}

export { getApi };
