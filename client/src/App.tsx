import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { CssBaseline } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import TelegramPage from "./components/TelegramPage";
import theme from "./components/material_ui_theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <h1>Parse my mess</h1>
        </Toolbar>
        <HashRouter>
          <div className="card">
            <nav>
              <a href="#/">Home</a>
              <a href="#/tele">Parse Telegram Messages</a>
            </nav>
          </div>
        </HashRouter>
      </AppBar>
      <Container>
        <p>An application to parse Telegram open channel messages</p>
        <HashRouter>
          <Routes>
            <Route path="/tele" element={<TelegramPage />} />
          </Routes>
        </HashRouter>
      </Container>
      <p className="read-the-docs">Demo version</p>
    </ThemeProvider>
  );
}

export default App;
