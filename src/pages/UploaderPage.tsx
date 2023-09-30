import "./UploaderPage.css";
import {
  ListUploaderDataParamas,
  getOptionData,
  postApi,
  queryUploaders,
} from "../util";
import { useEffect, useState } from "react";
import { UploadListItem } from "../components/UploadListItem";

// interface queryUploadersRes {
//   data: {items: []}
// }

export default function UploaderPage(props: any) {
  const [username, setUsername] = useState("");
  const [items, setItems] = useState<ListUploaderDataParamas>();

  useEffect(() => {
    const data = async () => {
      const listUploaders = await queryUploaders();
      if (listUploaders) {
        setItems(listUploaders);
      }
    };
    setUsername(props.username);
    data();
    console.log("UploaderPage", items);
  }, []);

  const uploadData = async () => {
    const res = await queryUploaders();
    const uploaders = res?.items;
    console.log("uploadData", uploaders);
    const key = "Owner#" + username;
    const option = await getOptionData(key);
    console.log("uploadData", key, option);
    const param = {
      data: uploaders,
      option: option,
    };
    postApi(param);
  };

  return (
    <>
      <button className="UploadButton" onClick={uploadData}>Upload data</button>
      <table id="uploadListTable">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>ReportedBy</th>
          </tr>
          <UploadListItem table={items?.items} />
        </tbody>
      </table>
    </>
  );
}
