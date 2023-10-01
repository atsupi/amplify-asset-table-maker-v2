import "./UploadListItem.css";

export const UploadListItem = (params: any) => {
  console.log("UploadListItem", params?.table);
  return (
    <>
      {params && params.table
        ? params.table.map((item: any) => {
          const keyname = "ulitr#"+ item.id;
            return (
                <tr key={keyname}>
                  <td>{item.id}</td>
                  <td>{item.code}</td>
                  <td>{item.reportBy}</td>
                </tr>
            );
          })
        : null}
    </>
  );
};
