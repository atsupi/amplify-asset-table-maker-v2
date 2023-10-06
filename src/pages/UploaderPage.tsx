import "./UploaderPage.css";
import {
  ListUploaderDataParamas,
  getOptionData,
  postApi,
  queryUploaders,
} from "../util";
import { useEffect, useState } from "react";
import { UploadListItem } from "../components/UploadListItem";
import { deleteUploader } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

export default function UploaderPage(props: any) {
  const [username, setUsername] = useState("");
  const [items, setItems] = useState<ListUploaderDataParamas>();

  const data = async () => {
    const listUploaders = await queryUploaders();
    if (listUploaders) {
      setItems(listUploaders);
    }
  };

  useEffect(() => {
    const data = async () => {
      const listUploaders = await queryUploaders();
      if (listUploaders) {
        setItems(listUploaders);
      }
    };
    setUsername(props.username);
    data();
  }, []);

  async function removeUploader(id: string) {
    try {
      await API.graphql(
        graphqlOperation(deleteUploader, { input: { id: id } })
      );
      data();
    } catch (err) {
      console.log("Error: deleteAssetTable", err);
    }
  }

  const uploadData = async () => {
    const res = await queryUploaders();
    const uploaders = res?.items;

    const key = "Owner#" + username;
    const option = await getOptionData(key);

    const param = {
      data: uploaders,
      option: option,
    };
    postApi(param);
  };

  return (
    <>
      <button className="UploadButton" onClick={uploadData}>
        Upload data
      </button>
      <table id="uploadListTable">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>ReportedBy</th>
            <th>Link</th>
          </tr>
          <UploadListItem table={items?.items} deleteitem={removeUploader} />
        </tbody>
      </table>
    </>
  );
}
