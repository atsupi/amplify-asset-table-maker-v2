import "./UploadListItem.css";

export const UploadListItem = (params: any) => {
  return (
    <>
      {params && params.table
        ? params.table.map((item: any) => {
            const keyname = "ulitr#" + item.id;
            return (
              <tr key={keyname}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.reportBy}</td>
                <td>
                  <button onClick={() => params.deleteitem(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        : null}
    </>
  );
};
