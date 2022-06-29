import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { themeSize } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watch from "./pages/watch/Watch";
import Marketplace from "./pages/marketplace/Marketplace";
import Groups from "./pages/groups/Groups";
import Gaming from "./pages/gaming/Gaming";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeSize}>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/gaming" element={<Gaming />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
