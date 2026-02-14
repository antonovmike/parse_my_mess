import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import TelegramPage from "./components/TelegramPage";
import theme from "./components/material_ui_theme";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Parse Telegram Messages", path: "/tele" },
];

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Parse my mess
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Box sx={{ display: "flex" }}>
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              ></IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Parse my mess
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    sx={{ color: "#fff" }}
                    component={Link}
                    to={item.path}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>

          <nav>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box" },
              }}
            >
              {drawer}
            </Drawer>
          </nav>

          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Container
              sx={{
                minHeight: "calc(80vh)", // screen height minus AppBar (64px by default) behaves weirdly, so we use 80vh as a workaround
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // push footer to the bottom, distributes content evenly
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <Typography>
                      An application to parse Telegram open channel messages
                    </Typography>
                  }
                />
                <Route path="/tele" element={<TelegramPage />} />
              </Routes>
              <Typography sx={{ mt: 2 }} color="text.secondary">
                Demo version
              </Typography>
            </Container>
          </Box>
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
