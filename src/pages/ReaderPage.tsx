import "./ReaderPage.css";

export const ReaderPage = (params: any) => {
  return (
    <div className="readerPageContainer">
      <p>Reader Page</p>
      <p>{params?.username}</p>
    </div>
  );
};
