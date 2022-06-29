import { Box, AppBar, Toolbar, InputBase } from "@mui/material";
import { Facebook, Search } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import NavTabs from "../gaming/Tabs";
import AvaBadge from "../marketplace/AvaBadge";
const Search1 = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f0f2f5",
  "&:hover": {
    backgroundColor: "#f0f2f5",
  },
  marginLeft: 20,
  width: "30%",
  [theme.breakpoints.up("mobile")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.up("tablet")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#65676b",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("mobile")]: {
      width: "120px",
      "&:focus": {
        width: "150px",
      },
    },
    [theme.breakpoints.up("tablet")]: {
      width: "180px",
      "&:focus": {
        width: "200px",
      },
    },
    [theme.breakpoints.up("laptop")]: {
      width: "220px",
      "&:focus": {
        width: "250px",
      },
    },
  },
}));
// #00b0ff
function NavBar() {
  return (
    <Box sx={{ paddingBottom: { mobile: "50px", desktop: "70px" } }}>
      <AppBar position="fixed" sx={{ bgcolor: "white" }}>
        <Toolbar paddingdisable="true">
          <Facebook sx={{ fontSize: "40px", color: "#1b74e4" }} />
          <Search1>
            <SearchIconWrapper>
              <Search sx={{ color: "#65676b" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search1>
          <NavTabs />
          <AvaBadge />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
