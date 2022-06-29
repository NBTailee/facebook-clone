import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Feet from "./Feet";
import RightBar from "./RightBar";
function Groups() {
  return (
    <Box sx={{ bgcolor: "#eeeeee", height: "auto" }}>
      <NavBar />
      <Stack direction="row" spacing={2}>
        <SideBar />
        <Feet />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default Groups;
