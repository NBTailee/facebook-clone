import {
  Box,
  Card,
  Tabs,
  Tab,
  Stack,
  Typography,
  IconButton,
  Badge,
  Avatar,
  ThemeProvider,
} from "@mui/material";
import "./story.css";
import { Add } from "@mui/icons-material";
import { themeColor } from "../../App";
// import { styled } from "@mui/material/styles";

function Story() {
  return (
    <ThemeProvider theme={themeColor}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Card sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <Tabs aria-label="basic tabs example">
              <Tab
                className="styled-tab"
                sx={{
                  width: "200px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#1b74e4",
                  borderBottom: 4,
                }}
                label="Tin"
              />
              <Tab
                className="styled-tab"
                sx={{
                  width: "200px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
                label="Reels"
              />
              <Tab
                className="styled-tab"
                sx={{
                  width: "200px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
                label="Phòng họp mặt"
              />
            </Tabs>
          </Box>
          <Stack direction="row" spacing={2}>
            <Card className="str-card" sx={{ width: "135px", height: "220px" }}>
              <img
                alt="img"
                src="../../../img/str1.jpg"
                className="str-img-1 str-img"
              />
              <IconButton className="add-btn">
                <Add className="add-icon" />
              </IconButton>
              <div className="overlay-btn"></div>
              <Typography className="str-name-1" variant="h8">
                Tạo tin
              </Typography>
            </Card>
            <Card className="str-card" sx={{ width: "135px", height: "220px" }}>
              <div className="overlay-str"></div>
              <img
                alt="img"
                src="../../../img/str2.jpg"
                className="str-img-2 str-img"
              />
              <Typography className="str-name-2" variant="h8">
                Ely Đoàn
              </Typography>
              <Badge
                className="str-avatar"
                sx={{ position: "absolute" }}
                color="other"
                overlap="circular"
                badgeContent=" "
                variant="dot"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" />
              </Badge>
              <div className="str-avatar-overlap"></div>
            </Card>
            <Card className="str-card" sx={{ width: "135px", height: "220px" }}>
              <div className="overlay-str"></div>
              <img
                alt="img"
                src="../../../img/str3.jpg"
                className="str-img-3 str-img"
              />
              <Typography className="str-name-3" variant="h8">
                Chú sửa tủ lạnh
              </Typography>
              <Badge
                className="str-avatar"
                sx={{ position: "absolute" }}
                color="other"
                overlap="circular"
                badgeContent=" "
                variant="dot"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar src="https://icdn.dantri.com.vn/thumb_w/660/2021/08/17/okalumnibai-10pham-huy-hoangver-12docx-1629211989482.png" />
              </Badge>
              <div className="str-avatar-overlap"></div>
            </Card>
            <Card className="str-card" sx={{ width: "135px", height: "220px" }}>
              <div className="overlay-str"></div>
              <img
                alt="img"
                src="../../../img/str4.jpg"
                className="str-img-4 str-img"
              />
              <Typography className="str-name-4" variant="h8">
                Kelvin Callist
              </Typography>
              <Badge className="str-avatar" sx={{ position: "absolute" }}>
                <Avatar src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/284430625_3229768384013524_1278338224256966891_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sYnevkJ57OoAX-jqgc5&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_L3Q58-jQZFQsMqarqFNtittFEgVIBfsYdfBNDJzQbCQ&oe=62B98EDB" />
              </Badge>
              <div className="str-avatar-overlap"></div>
            </Card>
          </Stack>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default Story;
