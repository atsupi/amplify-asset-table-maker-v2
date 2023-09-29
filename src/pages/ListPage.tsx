import { useEffect, useState } from "react";
import "./ListPage.css";

export default function ListPage(props: any) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(props.username);
  }, []);

  return (
    <div className="listPageContainer">
      <p>List Page</p>
      <p>{username}</p>
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
