import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Feet from "./Feet";
function Marketplace() {
  return (
    <Box sx={{ bgcolor: "#eeeeee", height: "auto" }}>
      <NavBar />
      <Stack direction="row">
        <SideBar />
        <Feet />
      </Stack>
    </Box>
  );
}

export default Marketplace;
