import React from "react";
import { Box, Stack } from "@mui/material";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import Feet from "./components/Feet/Feet";
import NavBar from "./components/NavBar/NavBar";
import { grey, blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";
export const themeColor = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: grey[300],
    },
    other: {
      main: "#31a24c",
      more1: "#00b0ff",
    },
  },
});
function App() {
  return (
    <Box bgcolor="#eeeeee">
      <NavBar />
      <ThemeProvider theme={themeColor}>
        <Stack direction="row" spacing={5}>
          <SideBar />
          <Feet />
          <RightBar />
        </Stack>
      </ThemeProvider>
    </Box>
  );
}

export default App;
