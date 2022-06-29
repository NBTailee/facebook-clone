import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Feet from "./Feet";
function Watch() {
  return (
    <Box sx={{ bgcolor: "#eeeeee", height: "auto" }}>
      <NavBar />
      <Stack direction="row">
        <SideBar />
        <Feet />
        <Box flex={0.7} sx={{ bgcolor: "#eeeeee" }}></Box>
      </Stack>
    </Box>
  );
}

export default Watch;
