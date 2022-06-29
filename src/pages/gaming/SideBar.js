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
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "../watch/watch.css";
import "../marketplace/marketplace.css";
// import { grey } from "@mui/material/colors";
import {
  Settings,
  Search,
  ViewQuilt,
  PlayArrow,
  EmojiEvents,
  SportsEsports,
  KeyboardArrowDown,
  VideogameAsset,
  Map,
  Casino,
  SquareFoot,
  Interests,
  Extension,
  Alarm,
  Notifications,
  Flag,
  DirectionsRun,
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
                Chơi game
              </Typography>
              <IconButton
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "050505",
                  marginLeft: "146px",
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
              <ViewQuilt sx={{ color: "#ffffff", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn-active`}></div>
            <ListItemText primary="Dành cho bạn" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <PlayArrow sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <KeyboardArrowDown
              sx={{
                position: "absolute",
                top: "19px",
                right: "10px",
                fontSize: "20px",
              }}
              // fontSize="large"
            />
            <ListItemText primary="Video" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <EmojiEvents sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <KeyboardArrowDown
              sx={{
                position: "absolute",
                top: "19px",
                right: "10px",
                fontSize: "20px",
              }}
              // fontSize="large"
            />
            <ListItemText primary="Vòng đấu" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <SportsEsports sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <KeyboardArrowDown
              sx={{
                position: "absolute",
                top: "19px",
                right: "10px",
                fontSize: "20px",
              }}
              // fontSize="large"
            />
            <ListItemText primary="Chơi game" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Notifications sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="Thông bao" />
          </ListItemButton>
          <Divider sx={{ marginTop: "10px" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                sx={{
                  fontSize: "17px",
                  fontWeight: "700",
                  bgcolor: "#ffffff",
                  // padding: "0",
                  marginBottom: "0",
                }}
                component="div"
                // id="nested-list-subheader"
              >
                Người phát trực tiếp bạn theo dõi
              </ListSubheader>
            }
          ></List>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
              // bgcolor: "#f0f2f5",
            }}
          >
            <Avatar src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/277675239_638095600978852_1897195092654202855_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=106&ccb=1-7&_nc_sid=3170a5&_nc_ohc=gyzH_ibZdVcAX9dFue-&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8_dpwFb5TFhvBflmgtSAVQN3sPogmCjgZY64Uzg_Pc8A&oe=62C10380"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px", fontWeight: "600" }}
              primary="Phân Tích Game"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
              // bgcolor: "#f0f2f5",
            }}
          >
            <Avatar src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/200027521_185873223540417_2998133536734538523_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=3170a5&_nc_ohc=V4TOyueW298AX_cOQMx&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8VY-HuE8veQWANxqUCx0vWFAeLp8PTZLACH6uyC0kC0A&oe=62E17D17"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px", fontWeight: "600" }}
              primary="HuyBu"
              secondary="Valorant"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
              // bgcolor: "#f0f2f5",
            }}
          >
            <Avatar src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/169976456_307817477370018_4461305293324667115_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=3170a5&_nc_ohc=_TDPihgcnsAAX_MnIOE&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_Y6_cGdP593Y3egoTNKQqblOb1GbCW9uLI9VGp5oovJw&oe=62E31D37"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px", fontWeight: "600" }}
              primary="Tuấn Tiền Tỉ"
              secondary="Age of Empires"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              height: "52px",
              // bgcolor: "#f0f2f5",
            }}
          >
            <Avatar src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/278022529_4878600265589923_4355373816123132918_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=3170a5&_nc_ohc=HmERJGYa_aUAX8XwPEK&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT93EWvYdpkSscUIzE9wuRbg-7sJR3TDzw0-qoBy7bvz0w&oe=62BFCA56"></Avatar>
            <ListItemText
              sx={{ paddingLeft: "20px", fontWeight: "600" }}
              primary="Quitapena Mza"
              secondary="League of Legends"
            />
          </ListItemButton>

          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                sx={{
                  fontSize: "17px",
                  fontWeight: "700",
                  bgcolor: "#ffffff",
                  // padding: "0",
                  marginBottom: "0",
                }}
                component="div"
                // id="nested-list-subheader"
              >
                Hạng mục
              </ListSubheader>
            }
          ></List>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <VideogameAsset sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="All games" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Map sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Phiêu lưu" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Casino sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Sòng bạc" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <SquareFoot sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Thiết kế" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Interests sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Xếp hình" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Extension sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Câu đố" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Alarm sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Chơi nhanh" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Flag sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Đua xe" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <DirectionsRun sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Chạy thi" />
          </ListItemButton>
        </List>
        {/* </Box> */}
      </Box>
    </Box>
  );
}

export default SideBar;
