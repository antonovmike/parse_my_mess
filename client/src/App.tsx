import { Routes, Route, HashRouter } from "react-router-dom";

import "./App.css";

import TelegramPage from "./components/TelegramPage";

function App() {
  return (
    <HashRouter>
      <div></div>
      <h1>Parse my mess</h1>
      <div className="card">
        <p>An application to parse Telegram open channel messages</p>
        <nav>
          <a href="#/">Home</a>
          <a href="#/tele">Parse Telegram Messages</a>
        </nav>
        <Routes>
          <Route path="/tele" element={<TelegramPage />} />
        </Routes>
      </div>
      <p className="read-the-docs">Demo version</p>
    </HashRouter>
  );
}

export default App;
