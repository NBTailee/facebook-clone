import { Box } from "@mui/material";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
// import { grey } from "@mui/material/colors";
import {
  Storefront,
  Groups,
  OndemandVideo,
  People,
  Bookmark,
  ArrowDropDown,
} from "@mui/icons-material";
function SideBar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      flex={1.5}
      p={2}
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },
        // display: "none",
      }}
    >
      <Box
        className="sidebar-wrapperzz"
        sx={{
          position: "fixed",
          width: "280px",
          // bgColor: "#eeeeee",
          height: "auto",
          borderRadius: "10px",
        }}
        disablePadding
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "#eeeeee",
            marginTop: "30px",
          }}
        >
          <Typography
            sx={{
              position: "fixed",
              top: "75px",
              left: "35px",
              fontSize: "19px",
              color: "#65676b",
            }}
          >
            Đức tài
          </Typography>
          <ListItemButton>
            <ListItemIcon>
              <People sx={{ color: "#1b74e4" }} />
            </ListItemIcon>
            <ListItemText primary="Bạn bè" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Groups sx={{ color: "#1b74e4" }} />
            </ListItemIcon>
            <ListItemText primary="Nhóm" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Bookmark sx={{ color: "#1b74e4" }} />
            </ListItemIcon>
            <ListItemText primary="Đã lưu" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Storefront sx={{ color: "#1b74e4" }} />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <OndemandVideo sx={{ color: "#1b74e4" }} />
            </ListItemIcon>
            <ListItemText primary="Watch" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ArrowDropDown sx={{ color: "#1b74e4" }} />
            </ListItemIcon>
            <ListItemText primary="Xem thêm" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder sx={{ color: "#ef6c00" }} />
                </ListItemIcon>
                <ListItemText primary="PornHub" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#eeeeee" }}
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  bgcolor: "#eeeeee",
                  // padding: "0",
                  marginBottom: "0",
                }}
                component="div"
                // id="nested-list-subheader"
              >
                Lối tắt của bạn
              </ListSubheader>
            }
          ></List>
          <ListItemButton sx={{ marginBottom: "10px" }}>
            <Avatar
              src="../../../img/str5.jpg"
              variant="rounded"
            ></Avatar>
            <ListItemText
              sx={{ paddingLeft: "10px" }}
              primary="Cộng đồng Front-end"
            />
          </ListItemButton>
          <ListItemButton sx={{ marginBottom: "10px" }}>
            <Avatar
              src="https://inkythuatso.com/uploads/images/2021/12/logo-pornhub-inkythuatso-21-15-41-06.jpg"
              variant="rounded"
            ></Avatar>
            <ListItemText sx={{ paddingLeft: "10px" }} primary="PornHub-VN" />
          </ListItemButton>
          <ListItemButton sx={{ marginBottom: "10px" }}>
            <Avatar
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/172958252_116008400591467_8655755968684895106_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QOqy_Pa4wxoAX8DhBnF&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_efA2VNNOjdYYsOaHvsfewe_a8YmzLu4WolL1j1o0DkQ&oe=62D3F1DF"
              variant="rounded"
            ></Avatar>
            <ListItemText sx={{ paddingLeft: "10px" }} primary="Eatadakimasu" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
