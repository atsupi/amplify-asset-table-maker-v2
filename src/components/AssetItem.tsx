import "./AssetItem.css";

export const AssetItem = (params: any) => {
    console.log('AssetItem:', params);
    const item = params.assettables.map((note: any) => (
          <tr key={note.id}>
            <td>{note.primaryKey.split('#')[1]}</td>
            <td>{note.date}</td>
            <td>{note.reportBy}</td>
            <td>{note.facility}</td>
            <td>{note.storage}</td>
            <td>{note.assetType}</td>
            <td>{note.id}</td>
            <td>
              <button onClick={() => params.deleteitem(note)}>Delete</button>
            </td>
          </tr>
      ))  
      return (
        <>
        {item}
        </>
      )
    };
