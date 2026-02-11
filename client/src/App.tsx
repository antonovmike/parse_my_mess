import { CssBaseline } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import TelegramPage from "./components/TelegramPage";
import theme from "./components/material_ui_theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
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
    </ThemeProvider>
  );
}

export default App;
