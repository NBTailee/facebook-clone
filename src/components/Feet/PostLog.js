import {
  Box,
  Avatar,
  Button,
  Divider,
  Typography,
  Stack,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import {
  Close,
  PermIdentity,
  ArrowDropDown,
  FontDownloadOutlined,
  SentimentSatisfiedAlt,
  PhotoLibrary,
  KeyboardVoice,
  LocalOffer,
  Mood,
  Place,
  MoreHoriz,
} from "@mui/icons-material";
import "./status.css";
import { useState } from "react";

function PostLog({ funcClose, funcOpen }) {
  const [act, setAct] = useState("disabled");
  return (
    <Dialog sx={{}} maxWidth="500px" onClose={funcClose} open={funcOpen}>
      {/* <Modal onClose={funClose}> */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: "500px" }}
        // spacing={2}
      >
        <Box sx={{ textAlign: "center", width: "500px" }}>
          <DialogTitle
            sx={{
              marginLeft: "60px",
              paddingBottom: "10px",
              fontWeight: "600",
            }}
          >
            Tạo bài viết
          </DialogTitle>
        </Box>
        <DialogActions>
          <button className="fix-btn" onClick={funcClose}>
            <Close sx={{ color: "#55545480" }} />
          </button>
        </DialogActions>
      </Stack>
      <Divider />
      <Stack sx={{ padding: "10px 0 10px 15px" }} direction="row" spacing={1}>
        <Avatar src="../../../img/str1.jpg" />
        <Stack direction="column" spacing={0.1}>
          <Typography
            variant="h9"
            sx={{ fontSize: "14px", fontWeight: "600", paddingLeft: "2px" }}
          >
            Đức Tài
          </Typography>
          <div className="post-overlay"></div>
          <Stack direction="row" alignItem="center">
            <PermIdentity
              fontSize="small"
              sx={{ position: "relative", top: "-3px", left: "3px" }}
            />
            <Button
              className="drop-btn fix-bg-btn"
              sx={{
                paddingLeft: "0",
                paddingTop: "0",
                margin: "0 !important",
                width: "100px",
                fontSize: "11px",
                color: "#1d1f23",
                position: "relative",
                right: "1px",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
              disableFocused
            >
              Bạn bè cụ thể
            </Button>
            <ArrowDropDown
              fontSize="small"
              sx={{ position: "relative", top: "-1px", left: "-15px" }}
            />
          </Stack>
        </Stack>
      </Stack>
      <input
        type="text"
        className="post-input"
        placeholder="Tài ơi, bạn đang nghĩ gì thế?"
        onChange={(e) => {
          console.log(e.target.value === "");
          console.log(act);
          if (e.target.value !== "") {
            setAct("");
          } else if (e.target.value === "") {
            setAct("disabled");
          }
        }}
      />
      <Stack
        spacing={53}
        direction="row"
        sx={{ paddingTop: "50px", paddingBottom: "20px" }}
      >
        <FontDownloadOutlined sx={{ color: "#43a047", marginLeft: "15px" }} />
        <SentimentSatisfiedAlt
          sx={{
            color: "rgba(97, 97, 97, 0.5)",
            cursor: "pointer",
          }}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={10}
        sx={{
          width: "480px",
          margin: "0 10px",
          border: "1px solid rgba(97, 97, 97, 0.5)",
          borderRadius: "10px",
          height: "60px",
        }}
      >
        <Button
          sx={{
            textTransform: "capitalize",
            color: "black",
            fontWeight: "600",
          }}
        >
          Thêm vào bài viết
        </Button>
        <Stack direction="row" spacing={0.3} alignItems="center">
          <IconButton sx={{ width: "40px", height: "40px", color: "#43a047" }}>
            <PhotoLibrary />
          </IconButton>
          <IconButton sx={{ width: "40px", height: "40px", color: "#1877f2" }}>
            <LocalOffer />
          </IconButton>
          <IconButton sx={{ width: "40px", height: "40px", color: "#f7b928" }}>
            <Mood />
          </IconButton>
          <IconButton sx={{ width: "40px", height: "40px", color: "#f5533d" }}>
            <Place />
          </IconButton>
          <IconButton sx={{ width: "40px", height: "40px", color: "#f02849" }}>
            <KeyboardVoice />
          </IconButton>
          <IconButton sx={{ width: "40px", height: "40px" }}>
            <MoreHoriz />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        sx={{
          paddingTop: "18px",
          paddingBottom: "15px",
          textAlign: "center",
        }}
      >
        {act !== "disabled" ? (
          <Button
            variant="contained"
            sx={{ width: "480px", borderRadius: "8px" }}
          >
            Đăng
          </Button>
        ) : (
          <Button
            disabled
            variant="contained"
            sx={{ width: "480px", borderRadius: "8px" }}
          >
            Đăng
          </Button>
        )}
      </Box>
      {/* </Modal> */}
    </Dialog>
  );
}

export default PostLog;
