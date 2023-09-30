import { useEffect, useState } from "react";
import "./ListPage.css";
import { AssetItem } from "../components/AssetItem";

export default function ListPage(props: any) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(props.username);
  }, []);

  return (
    <div className="listPageContainer">
                <table className="listPageTable">
            <tbody>
              <tr>
                <th>Serial#</th>
                <th>Date</th>
                <th>ReportedBy</th>
                <th>Location</th>
                <th>Storage</th>
                <th>Asset type</th>
                <th>PK</th>
                <th>Link</th>
              </tr>
              <AssetItem assettables={props.assettables} deleteitem={props.deleteitem}/>
            </tbody>
          </table>
    </div>
  );
}

// type AssetTable @model (
//   id: ID!
//   primaryKey: String!
//   date: String!
//   reportBy: String!
//   storage: String!
//   facility: String!
//   assetType: String!
//   type: String!
// }
