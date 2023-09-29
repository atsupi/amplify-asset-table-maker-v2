import { useEffect, useState } from "react";
import { UploaderDataParams, createCode } from "../util";
import "./ReaderPage.css";

export const ReaderPage = (params: any) => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(params.username);
  }, []);

  const UploadTestCode = () => {
    const date = new Date().getTime().toString().slice(0, 12);
    const param: UploaderDataParams = {
      id: date,
      reportBy: username,
      code: "123456789012"
    }
    createCode(param);
  }

  return (
    <div className="readerPageContainer">
      <p>Reader Page</p>
      <p>{username}</p>
      <button onClick={UploadTestCode}>Upload test code</button>
    </div>
  );
};
