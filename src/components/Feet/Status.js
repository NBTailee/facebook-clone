import {
  Box,
  Card,
  Avatar,
  Button,
  Divider,
  Typography,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import "./status.css";
import {
  VideoCameraBack,
  PhotoLibrary,
  InsertEmoticon,
} from "@mui/icons-material";
import PostLog from "./PostLog";
function Status() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Card sx={{ borderRadius: "10px", width: "100%", marginTop: "10px" }}>
        <Stack direction="row" spacing={2} sx={{ padding: "15px" }}>
          <Avatar src="../../../img/str1.jpg" />
          <input
            onClick={handleClickOpen}
            placeholder="Tài ơi, bạn đang nghĩ gì thế?"
            className="status-input"
          />
          <PostLog funcOpen={open} funcClose={handleClickClose} />
        </Stack>
        <Divider />
        <Stack direction="row">
          <Button
            startIcon={
              <VideoCameraBack fontSize="large" sx={{ color: "#e53935" }} />
            }
            variant="text"
            sx={{
              width: "200px",
              height: "50px",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#0f0f0f80",
              paddingTop: "10px",
            }}
          >
            Video trực tiếp
          </Button>
          <Button
            startIcon={
              <PhotoLibrary fontSize="large" sx={{ color: "#43a047" }} />
            }
            variant="text"
            sx={{
              width: "200px",
              height: "50px",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#0f0f0f80",
              paddingTop: "10px",
            }}
          >
            Ảnh/video
          </Button>
          <Button
            startIcon={
              <InsertEmoticon fontSize="large" sx={{ color: "#fbc02d" }} />
            }
            variant="text"
            sx={{
              width: "200px",
              height: "50px",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#0f0f0f80",
              paddingTop: "10px",
            }}
          >
            Cảm xúc/ hoạt động
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default Status;
