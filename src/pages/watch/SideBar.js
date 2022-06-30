import { Box } from "@mui/material";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./watch.css";
// import { grey } from "@mui/material/colors";
import {
  Bookmark,
  Settings,
  Search,
  OndemandVideo,
  VideoCameraFront,
  Movie,
} from "@mui/icons-material";
function SideBar() {
  return (
    <Box
      flex={2.5}
      p={2}
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },

        // display: "none",
        margin: "0 !important",
        padding: "0 !important",
      }}
    >
      <Box
        className="sidebar-wrapperzz"
        sx={{
          position: "fixed",
          width: "400px",
          // bgColor: "#eeeeee",
          maxHeight: "90vh",
          overflowY: "scroll",
          height: "auto",
          borderRadius: "10px",
        }}
        disablePadding
      >
        {/* <Box sx={{ width: "350px", bgcolor: "#ffffff", zIndex: "-1" }}> */}
        <List
          sx={{
            width: "350px",
            // maxWidth: 400,
            bgcolor: "#ffffff",
            marginTop: "100px",
            marginLeft: "0px",
            padding: "10px 20px 10px 20px",
            // margin: "100px 15px 15px 15px",
          }}
        >
          <Box
            sx={{
              position: "fixed",
              top: "64px",
              left: "0px",
              bgcolor: "#ffffff",
              width: "350px",
              height: "110px",
              paddingRight: "0 !important",
              zIndex: "4",
            }}
          >
            <Stack direction="row" alignItems="center">
              <Typography
                sx={{
                  color: "#050505",
                  fontSize: "25px",
                  fontWeight: "600",
                  margin: "12px 0 5px 22px",
                }}
              >
                Watch
              </Typography>
              <IconButton
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "050505",
                  marginLeft: "203px",
                  marginTop: "6px",
                  zIndex: "2",
                }}
              >
                <Settings sx={{ zIndex: "2", color: "050505" }} />
              </IconButton>
              <div className={`all-overlap-btn setting-overlap`}></div>
            </Stack>

            <Stack direction="row">
              <Search
                sx={{
                  position: "absolute",
                  top: "63px",
                  left: "32px",
                  color: "#65676b",
                }}
              />
              <input
                type="text"
                className="video-search"
                placeholder="Tìm kiếm video"
              />
            </Stack>
            <Divider sx={{ marginLeft: "22px", marginRight: "20px" }} />
          </Box>
          <ListItemButton
            sx={{ borderRadius: "10px", height: "52px", bgcolor: "#f0f2f5" }}
          >
            <ListItemIcon>
              <OndemandVideo sx={{ color: "#ffffff", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn-active`}></div>
            <ListItemText primary="Trang chủ" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <VideoCameraFront sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="Trực tiếp" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Movie sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="Chương trình" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Bookmark sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="Video đã lưu" />
          </ListItemButton>
          <Divider sx={{ marginTop: "10px" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  bgcolor: "#ffffff",
                  // padding: "0",
                  marginBottom: "0",
                }}
                component="div"
                // id="nested-list-subheader"
              >
                Đang theo dõi
              </ListSubheader>
            }
          ></List>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
              bgcolor: "#f0f2f5",
            }}
          >
            <Avatar src="http://addplaybuttontoimage.way4info.net/Images/Icons/25.png"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px", fontWeight: "600" }}
              primary="Video mới nhất"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
            }}
          >
            <Avatar src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/75543592_3894988207238706_6035749005999210496_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=BR32B_KbsBEAX8m_sMh&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9Qy3BYEPVgutKDb2frWDwURWNRJMm9SkEmoRkIMb5_hA&oe=62D9EC48"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px" }}
              secondary="9+ video mới"
              primary="YAN News"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
            }}
          >
            <Avatar src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/49388058_1193239107484033_541060850165743616_n.jpg?stp=c14.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=mR056_ngKfMAX-LKD5S&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-Pnncor8odHOC2Df862KKR3GSCpD_u11cQ6zubdaiEzA&oe=62D9180F"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px" }}
              secondary="1 video mới"
              primary="Bác Sĩ Gấu CTUMP"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
            }}
          >
            <Avatar src="../../../img/str12.png"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px" }}
              secondary="1 video mới"
              primary="Nguyễn Hữu Trí"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
            }}
          >
            <Avatar src="../../../img/str11.jpg"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px" }}
              secondary="7 video mới"
              primary="Shark Tank Việt Nam"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
            }}
          >
            <Avatar src="../../../img/str13.jpg"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px" }}
              secondary="9+ video mới"
              primary="Xàm Lờ - The Reviewer"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
            }}
          >
            <Avatar src="../../../img/str14.jpg"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px" }}
              secondary="5 video mới"
              primary="Tiệm Bánh Radio"
            />
          </ListItemButton>
        </List>
        {/* </Box> */}
      </Box>
    </Box>
  );
}

export default SideBar;
