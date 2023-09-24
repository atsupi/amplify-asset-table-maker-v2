import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { getApi } from "./util";
import { Authenticator } from "@aws-amplify/ui-react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import UploaderPage from "./pages/UploaderPage";
import SettingPage from "./pages/SettingPage";

function App() {
  getApi();

  return (
    <>
      <header className="App-header">
      <Authenticator>
          {({ signOut, user }) => (
            <>
              <p>Hello, {user?.username}</p>
              <button onClick={signOut}>Sign out</button>
            </>
          )}
        </Authenticator>
      </header>
      <main className="App-main">
      <BrowserRouter>
                  <NavBar />
                  <div className="MainContent">
                    <Routes>
                      <Route index path="/" element={<ListPage items={[]} />} />
                      <Route path="/upload" element={<UploaderPage />} />
                      <Route path="/setting" element={<SettingPage />} />
                    </Routes>
                  </div>
                </BrowserRouter>

      </main>
    </>
  );
}

export default App;
