/* Amplify Params - DO NOT EDIT
  API_ASSETTABLEMAKERV2_ASSETTABLETABLE_ARN
  API_ASSETTABLEMAKERV2_ASSETTABLETABLE_NAME
  API_ASSETTABLEMAKERV2_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

import { DynamoDBClient, PutItemCommand, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import express from 'express';
import * as awsServerlessExpressMiddleware from 'aws-serverless-express/middleware.js';

// declare a new express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const config = {};
const dbClient = new DynamoDBClient(config);
const documentClient = DynamoDBDocumentClient.from(dbClient);

const saveAssetData = async (key, date, reportBy, storage, facility, assetType, type) => {
  console.log("saveAssetData", process.env.API_ASSETTABLEMAKERV2_ASSETTABLETABLE_NAME);
  try {
    const id = new Date().getTime().toString();
    const command = new PutItemCommand({
      TableName: process.env.API_ASSETTABLEMAKERV2_ASSETTABLETABLE_NAME,
      Item: {
        "id": { "S": id },
        "primaryKey": { "S": key },
        "reportBy": { "S": reportBy },
        "storage": { "S": storage },
        "facility": { "S": facility },
        "assetType": { "S": assetType },
        "date": { "S": date },
        "type": { "S": "asset" },
        "__typename": { "S": "AssetTable" },
        "owner": { "S": reportBy },
      },
    });
    const output = await dbClient.send(command);
    console.log('SUCCESS (put item):', output);
    return id;
  } catch (err) {
    console.log('ERROR:', err);
  }
  return null;
};

const loadAssetData = async (id) => {
  console.log("loadData", process.env.API_ASSETTABLEMAKERV2_ASSETTABLETABLE_NAME, id);
  if (id == null) return;
  try {
    const command = new GetItemCommand({
      TableName: process.env.API_ASSETTABLEMAKERV2_ASSETTABLETABLE_NAME,
      Key: {
        "id": { "S": id },
      },
    });
    const output = await dbClient.send(command);
    console.log('SUCCESS (get item):', output);
    return output;
  } catch (err) {
    console.log('ERROR:', err);
  }
};

function getDateString() {
  const date = new Date();
  const result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return result;
}

/**********************
 * Example get method *
 **********************/
app.get('/items', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
* Example post method *
****************************/
app.post('/items', async function (req, res, next) {
  const items = req.body.data;
  const option = req.body.option;

  const save = async (item, option) => {
    const id = await saveAssetData(
      "SerialNo#" + item.code,
      getDateString(),
      option.reportBy,
      option.storage,
      option.facility,
      option.assetType,
      "asset",
    );
  };

  console.log("app.post:", option);
  try {
    items.map((item) => {
      console.log("app.post:", item);
      save(item, option).then(()=> {
        console.log("app.post:", item.code, 'save completed');
      });
    });
  } catch (error) {
    next(error);
  }

  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
export { app };
