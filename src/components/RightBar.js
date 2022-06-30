import {
  Box,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  // ListItemIcon,
  Avatar,
  Typography,
  Divider,
  Stack,
  Badge,
  ThemeProvider,
} from "@mui/material";
import {
  MoreHoriz,
  NotificationsActiveOutlined,
  CampaignOutlined,
  VideoCall,
  Search,
} from "@mui/icons-material";
import { themeColor } from "../App";
import "../components/Feet/status.css";
function RightBar() {
  return (
    <ThemeProvider theme={themeColor}>
      <Box
        flex={2}
        p={2}
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
          borderRadius: "10px",
        }}
      >
        <Box
          bgcolor="#eeeeee"
          sx={{
            position: "fixed",
            width: "390px",
            right: "10px",
            top: "70px",
            borderRadius: "10px",
            height: "auto",
            padding: "12px 0",
          }}
        >
          <List
            className="scroll-right"
            component="nav"
            sx={{ maxHeight: "100vh", overflowY: "scroll" }}
          >
            <ListItemText>
              <Typography
                sx={{
                  position: "relative",
                  left: "15px",
                  fontSize: "19px",
                  color: "#65676b",
                }}
              >
                Được tài trợ
              </Typography>
            </ListItemText>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    width: "100px",
                    height: "100px",
                    margin: "0 20px 12px 0px",
                  }} 
                  src="../../../img/str17.png"
                />
              </ListItemAvatar>
              <ListItemText secondary="shope.ee" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    width: "100px",
                    height: "100px",
                    margin: "0 20px 12px 0px",
                  }}
                  src="../../../img/str16.jpg"
                />
              </ListItemAvatar>
              <ListItemText primary="Xgear" secondary="thenewxgear.com" />
            </ListItemButton>
            <Divider />
            <ListItemText>
              <Typography
                sx={{
                  position: "relative",
                  left: "15px",
                  fontSize: "18px",
                  color: "#65676b",
                  paddingTop: "10px",
                }}
              >
                Trang và trang cá nhân của bạn
              </Typography>
            </ListItemText>
            <ListItemButton
              sx={{
                position: "absolute",
                borderRadius: "12px",
                width: "60px",
                height: "20px",
                right: "1px",
                top: "320px",
              }}
            >
              <MoreHoriz sx={{ color: "#65676b" }} fontSize="small" />
            </ListItemButton>
            <ListItemButton sx={{ display: "flex", alignItems: "center" }}>
              <ListItemAvatar>
                <Avatar src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/172958252_116008400591467_8655755968684895106_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MiIEX-Mw0msAX-XK9iQ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT---qtzRaFCB4XxvrAHBNGSrmaAgtNEdRmE7FlmqDXn1A&oe=62D7E65F" />
              </ListItemAvatar>
              <ListItemText primary="Eatadakimasu-Food4Life" />
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "12px" }}>
              <NotificationsActiveOutlined sx={{ color: "#65676b" }} />
              <ListItemText
                secondary="16 thông báo"
                sx={{ paddingLeft: "10px" }}
              />
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "12px" }}>
              <CampaignOutlined sx={{ color: "#65676b" }} />
              <ListItemText
                secondary="Tạo quảng cáo"
                sx={{ paddingLeft: "10px" }}
              />
            </ListItemButton>
            <Divider sx={{ marginBottom: "10px" }} />
            <Stack direction="row" spacing="165px">
              <Typography
                sx={{
                  position: "relative",
                  left: "15px",
                  fontSize: "19px",
                  color: "#65676b",
                }}
              >
                Người liên hệ
              </Typography>
              <Stack direction="row" spacing="15px">
                <ListItemButton
                  sx={{ margin: "0", padding: "0", borderRadius: "50%" }}
                >
                  <VideoCall fontSize="small" sx={{ color: "#65676b" }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ margin: "0", padding: "0", borderRadius: "50%" }}
                >
                  <Search fontSize="small" sx={{ color: "#65676b" }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ margin: "0", padding: "0", borderRadius: "50%" }}
                >
                  <MoreHoriz fontSize="small" sx={{ color: "#65676b" }} />
                </ListItemButton>
              </Stack>
            </Stack>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="../../../img/str9.jpg" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="quyền cu" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="https://pbs.twimg.com/profile_images/1265959375207903232/SYYq5yKJ_400x400.jpg" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Phúc chó" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="../../../img/str15.jpg" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Bắc nô lệ châu Phi" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="../../../img/str7.jpg" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Vũ cu bé" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErgE75QdALQ1DRrbIC1NXIB_VNF2u-T95mw&usqp=CAU" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Johnny Sin" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="../../../img/str6.jpg"/>
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Lộc wibu retard" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="../../../img/str8.jpg" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Fuoc liên kết" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=MW_y1TlORRUAX-8NBKp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-p8sjeg06UXicdchLZce9aiphBKU3CdAUB_VEWE1-Nfg&oe=62DA49F8" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Ân na" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="../../../img/str10.jpg" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Thiên lỏd" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Badge
                  color="other"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/284634976_378956194269330_7463322868103999610_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hxLHJfCBrTAAX-l0rko&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9yDpYAtGxKhQbX2x6x2i21UCRaW_YM49wftRPJndglyQ&oe=62B7E80D" />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary="Thiên lỏd" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default RightBar;
