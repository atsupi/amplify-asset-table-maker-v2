import "./UploaderPage.css";
import { getOptionData, postApi, queryUploaders } from "../util";
import { useEffect, useState } from "react";

// interface queryUploadersRes {
//   data: {items: []}
// }

export default function UploaderPage(props: any) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(props.username);
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
      <p>Uploader Page</p>
      <p>{props?.username}</p>
      <button onClick={uploadData}>Upload data</button>
    </>
  );
}
