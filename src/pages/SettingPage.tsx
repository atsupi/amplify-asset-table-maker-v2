import "./SettingPage.css";
import { useEffect, useState } from "react";
import {
  OptionDataParams,
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
  const [inProgress, setInProgress] = useState(false);
  const key = "Owner#" + props.username;

  async function fetchSettingData() {
    const data = await getOptionData(key);
    if (data === undefined || data === null) {
      const params: OptionDataParams = {
        id: key,
        reportBy: props.username,
        facility: "",
        storage: "",
        assetType: "",
      };
      await createOptionData(params);
      setReportBy(props.username);
    }
    return data;
  }

  useEffect(() => {
    fetchSettingData().then((data: OptionDataParams | undefined) => {
      if (data) {
        setReportBy(data.reportBy || "");
        setFacility(data.facility || "");
        setStorage(data.storage || "");
        setAssetType(data.assetType || "");
      }
    });
  }, [key]);

  async function handleSubmit(event: any) {
    setInProgress(true);
    event.preventDefault();
    const param: OptionDataParams = {
      id: key,
      reportBy: event.target[0].value,
      storage: event.target[1].value,
      facility: event.target[2].value,
      assetType: event.target[3].value,
    };
    await setOptionData(param);
    setInProgress(false);
  }
  return (
    <>
      <div className="SettingPageContainer">
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
          <button className="submitButton" type="submit" disabled={inProgress}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
