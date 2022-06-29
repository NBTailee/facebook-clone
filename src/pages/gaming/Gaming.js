import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Feet from "./Feet";
function Gaming() {
  return (
    <Box sx={{ bgcolor: "#eeeeee", height: "auto" }}>
      <NavBar />
      <Stack direction="row">
        <SideBar />
        <Feet />
        <Box flex={1.4} sx={{ bgcolor: "#eeeeee" }}></Box>
      </Stack>
    </Box>
  );
}

export default Gaming;
