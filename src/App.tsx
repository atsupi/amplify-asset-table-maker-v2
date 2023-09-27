import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { getApi } from "./util";
import { Authenticator } from "@aws-amplify/ui-react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import UploaderPage from "./pages/UploaderPage";
import SettingPage from "./pages/SettingPage";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  getApi();

  return (
    <>
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => {
            setUsername(user?.username || "");
            return (
              <>
                <p>Hello, {user?.username}</p>
                <button onClick={signOut}>Sign out</button>
              </>
            );
          }}
        </Authenticator>
      </header>
      <main className="App-main">
        <BrowserRouter>
          <div className="NavBarContent">
            <NavBar />
          </div>
          <div className="MainContent">
            <Routes>
              <Route index path="/" element={<ListPage />} />
              <Route path="/upload" element={<UploaderPage />} />
              <Route
                path="/setting"
                element={<SettingPage username={username} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
