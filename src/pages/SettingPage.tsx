import "./SettingPage.css";
import { useEffect, useState } from "react";
import {
  SetOptionDataParams,
  createOptionData,
  getOptionData,
  setOptionData,
} from "../util";

export interface SettingPageProps {
  username: string;
}

export interface FormDataProps {
  reportBy: string;
  facility: string;
  storage: string;
  assetType: string;
}

export default function SettingPage(props: any) {
  const [reportBy, setReportBy] = useState("");
  const [facility, setFacility] = useState("");
  const [storage, setStorage] = useState("");
  const [assetType, setAssetType] = useState("");
  const key = "Owner#" + props.username;

  async function fetchSettingData() {
    const data = await getOptionData(key);
    if (data === undefined) {
      await createOptionData(key);
    }
    return data;
  }

  useEffect(() => {
    fetchSettingData().then((data: SetOptionDataParams | undefined) => {
      if (data) {
        setReportBy(data.reportBy || "");
        setFacility(data.facility || "");
        setStorage(data.storage || "");
        setAssetType(data.assetType || "");
      }
    });
  }, [key]);

  function handleSubmit(event: any) {
    event.preventDefault();
    const param: SetOptionDataParams = {
      id: key,
      reportBy: event.target[0].value,
      storage: event.target[1].value,
      facility: event.target[2].value,
      assetType: event.target[3].value,
    };
    setOptionData(param);
  }
  return (
    <>
      <div className="Container">
        <p>Setting Page</p>
        <form onSubmit={handleSubmit}>
          <label>
            User:
            <input
              id="user"
              type="text"
              value={reportBy}
              onChange={(e) => setReportBy(e.target.value)}
            />
          </label>
          <br />
          <label>
            Storage:
            <input
              id="storage"
              type="text"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
            />
          </label>
          <br />
          <label>
            Facility:
            <input
              id="facility"
              type="text"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
            />
          </label>
          <br />
          <label>
            Asset type:
            <input
              id="assetType"
              type="text"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
            />
          </label>
          <br />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
