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
import { Settings, Search, Feed, Explore } from "@mui/icons-material";
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
                Marketplace
              </Typography>
              <IconButton
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "050505",
                  marginLeft: "131.5px",
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
            {/* --------------------------Fixable---------------------------------- */}
            <Divider sx={{ marginLeft: "22px", marginRight: "20px" }} />
          </Box>
          <ListItemButton
            sx={{ borderRadius: "10px", height: "52px", bgcolor: "#f0f2f5" }}
          >
            <ListItemIcon>
              <Feed sx={{ color: "#ffffff", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn-active`}></div>
            <ListItemText primary="Bảng feed của bạn" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Explore sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="Khám phá" />
          </ListItemButton>

          <button className="market-btn">
            <span className="plus-market">+</span> Tạo nhóm mới
          </button>
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
                Nhóm do bạn quản lý
              </ListSubheader>
            }
          ></List>
          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://i1.sndcdn.com/artworks-T6uarHyit19WyNFT-TxVypQ-t500x500.jpg"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="Cu to vi en"
              secondary="Hoạt động: 13 tuần trước"
            />
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
                Nhóm bạn đã tham gia
              </ListSubheader>
            }
          ></List>
          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/96363880_2204770646331107_836141527355883520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=dKyYADFFGsAAX9WKJjP&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8CE0iVUvKElZWYrpkbeJbZwh2TCHOjVQRBCkc8CMmZjA&oe=62DEA153"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="Lập Trình C,C++,C#,Java,Python,..."
              secondary="Hoạt động: 3 phút trước"
            />
          </ListItemButton>
          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/287322524_2273177879488205_691893901926115252_n.png?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8631f5&_nc_ohc=Cz_Vuae8KyAAX88JDpg&_nc_oc=AQksI3pO4j2ui6Cli33OsJ-AN494HpQlKBD-KwkIbGJmYuxvB0XmH95FucEkc0wN0ll1o0HKrEFaCRU_1UZE5KzR&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-4XXNCltM7rQXMEQUXzDj7p8hPBe9qeXOJXOW71hwNkg&oe=62BFDA80"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="J2TEAM Community"
              secondary="Hoạt động: 12 phút trước"
            />
          </ListItemButton>
          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/240655429_4059163764195718_3652059374269714525_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_ohc=Krcl8yORRwsAX8uyCjq&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-aGp8IySEehpg5NL3ddjUtDTNRVJEUe-LQY96G2L6YjA&oe=62BFDCCE"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="Cộng đồng Front-end(CSS/JS) Việt Nam"
              secondary="Hoạt động: 6 giờ trước"
            />
          </ListItemButton>
          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/259477133_851047312257548_404372269826818935_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_ohc=ukovDuzmwLAAX-SsGa_&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT82G-wH2_R403dG9LGiohHKYN1InMrI8Zgz9yJ8-lALoQ&oe=62BEC2F7"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="Node.js Việt Nam"
              secondary="Hoạt động: 1 ngày trước"
            />
          </ListItemButton>
          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/117128761_2037307119737461_7015618245977962616_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=JgZxnSwNzWAAX9UvCF4&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9xlzXg9-TSxVMVGZwWgNNnWuoW8ie4TlRzWCLZaHPNnA&oe=62E14853"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="Nhóm toán thầy Toàn 2022-2023"
              secondary="Hoạt động: 3 ngày trước"
            />
          </ListItemButton>

          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/276031512_4928149407271652_9157059634572167456_n.png?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_ohc=UiJNLh2XIxcAX9SczkC&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT97-A2dNUQT74_5Q123stuumLpR_1-d1bO9TA__lkS-2Q&oe=62BF6546"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="Tều Phạm Và Trạng Bím"
              secondary="Hoạt động: 3 tuần trước"
            />
          </ListItemButton>
          <ListItemButton>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/99150382_2373389886293021_4517395805354590208_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=c5oAZJTrjnkAX92s05_&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT90wlpzY-EpfVyxoMyCA09Qs65ewVJ1yoHE-3wFJwZmvw&oe=62DF8644"
              variant="rounded"
            />
            <ListItemText
              sx={{ wordBreak: "break-all", marginLeft: "15px" }}
              primary="Không ổn rồi"
              secondary="Hoạt động: 1 phút trước"
            />
          </ListItemButton>
        </List>
        {/* </Box> */}
      </Box>
    </Box>
  );
}

export default SideBar;
