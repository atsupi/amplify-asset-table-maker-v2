import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { getApi } from "./util";
import { Authenticator } from "@aws-amplify/ui-react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import UploaderPage from "./pages/UploaderPage";
import SettingPage from "./pages/SettingPage";
import { useEffect, useState } from "react";
import { ReaderPage } from "./pages/ReaderPage";
import { Auth } from "aws-amplify";

function App() {
  const [username, setUsername] = useState("");
  getApi();

  async function currentAuthenticatedUser() {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      });
      setUsername(user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    currentAuthenticatedUser();
  }, []);

  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <header className="App-header">
              <p>Hello, {user?.username}</p>
              <button onClick={signOut}>Sign out</button>
            </header>
            <main className="App-main">
              <BrowserRouter>
                <div className="NavBarContent">
                  <NavBar />
                </div>
                <div className="MainContent">
                  <Routes>
                    <Route index path="/" element={<ListPage />} />
                    <Route
                      path="/reader"
                      element={<ReaderPage username={username} />}
                    />
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
        )}
      </Authenticator>
    </>
  );
}

export default App;
