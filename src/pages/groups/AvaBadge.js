import React, { useState } from "react";
import {
  Avatar,
  Badge,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Button,
  Typography,
  Tooltip,
  Box,
  Chip,
} from "@mui/material";
import {
  Widgets,
  Chat,
  Notifications,
  ArrowDropDown,
  Settings,
  Help,
  Announcement,
  Logout,
} from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { themeColor } from "../../App";
function AvaBadge() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ position: "absolute", right: { mobile: "180px", desktop: "40px" } }}
      alignItems="center"
      paddingdisable="true"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // mobile: { position: "relative", right: "-50px" },
          position: { mobile: "absolute", desktop: "relative" },
          right: { mobile: "-30px", laptop: "0", desktop: "0" },
        }}
      >
        <ThemeProvider theme={themeColor}>
          <Tooltip title="Đức Tài">
            <Chip
              avatar={
                <Avatar
                  alt="Natacha"
                  src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/167372717_463341765008109_4684160886805043960_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZxSm8QkaGpYAX96H39u&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9YpVTHSFbJq_BI1cjxm0DgaTIfQRVca8f5KZtoKLyOOA&oe=62D2B38D"
                />
              }
              label="Đức Tài"
              variant="outlined"
              sx={{ color: "#65676b" }}
            />
          </Tooltip>
        </ThemeProvider>
        {/* <Typography
            variant="h8"
            sx={{
              paddingLeft: "10px",
              display: { mobile: "block", tablet: "block", laptop: "none" },
            }}
          >
            Tài
          </Typography> */}
      </Box>
      <Tooltip title="Menu">
        <IconButton
          sx={{
            width: "50px",
            height: "50px",
            color: "#65676b",
            display: { mobile: "none", tablet: "none", laptop: "block" },
          }}
        >
          <Badge>
            <Widgets />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Messenger">
        <IconButton
          sx={{
            width: "50px",
            height: "50px",
            color: "#65676b",
            display: { mobile: "none", tablet: "none", laptop: "block" },
          }}
        >
          <Badge
            color="error"
            badgeContent={6}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Chat />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Thông báo">
        <IconButton
          sx={{
            width: "50px",
            height: "50px",
            color: "#65676b",
            display: { mobile: "none", tablet: "none", laptop: "block" },
          }}
        >
          <Badge
            color="error"
            badgeContent={12}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Notifications />
          </Badge>
        </IconButton>
      </Tooltip>
      <Box paddingdisable="true">
        <Button
          sx={{
            display: {
              mobile: "none",
              tablet: "none",
              laptop: "block",
              desktop: "block",
            },
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <ArrowDropDown
            fontSize="large"
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              color: "#65676b",
              paddingRight: "10px",
              display: { mobile: "none", tablet: "none", laptop: "block" },
            }}
          />
        </Button>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Settings sx={{ paddingRight: "10px" }} fontSize="large" />
            Cài đặt & quyền riêng tư
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Help sx={{ paddingRight: "10px" }} fontSize="large" />
            Trợ giúp & hỗ trợ
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Announcement sx={{ paddingRight: "10px" }} fontSize="large" />
            Đóng góp ý kiến
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Logout sx={{ paddingRight: "10px" }} fontSize="large" />
            Đăng xuất
          </Typography>
        </MenuItem>
      </Menu>
    </Stack>
  );
}

export default AvaBadge;
