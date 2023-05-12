import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";
function RightBar() {
  return (
    <Box flex={2.5} bgcolor="#eeeeee" sx={{ marginRight: "10px" }}>
      <Box>
        <Box
          bgcolor="#fff"
          sx={{
            // width: "100%",
            borderRadius: "12px",
            height: "auto",
            marginTop: "15px",
            position: "fixed",
            width: "350px",
          }}
        >
          <Stack direction="row" spacing={16} alignItems="center">
            <Typography
              sx={{
                color: "#050505",
                paddingLeft: "15px",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              Gợi ý cho bạn
            </Typography>
            <Button sx={{ color: "#1877f2", textTransform: "capitalize" }}>
              Xem Thêm
            </Button>
          </Stack>
          <Typography
            sx={{
              color: "rgb(101 103 107)",
              paddingLeft: "15px",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            Nhóm mà bạn có thể quan tâm
          </Typography>
          <Box
            sx={{
              margin: "10px 10px 10px 10px",
              borderRadius: "10px",
              overflow: "hidden",
              border: "0.1px solid #e4e6eb",
            }}
          >
            <img
              style={{ zIndex: "2", borderBottom: "0.1px solid #e4e6eb" }}
              src="data:image/png;base64,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"
            />
            <IconButton
              sx={{
                position: "relative",
                bottom: "235px",
                left: "285px",
              }}
            >
              <Clear sx={{ zIndex: "4", color: "#fff" }} />
            </IconButton>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#929292",
                position: "absolute",
                bottom: "315px",
                left: "295.5px",
                zIndex: "3",
                opacity: "0.5",
              }}
            ></div>
            <Typography
              sx={{
                position: "relative",
                bottom: "36px",
                left: "12px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              VNOI - diễn đàn tin học Việt Nam
            </Typography>
            <Typography
              sx={{
                position: "relative",
                bottom: "36px",
                left: "12px",
                fontSize: "14px",
                fontWeight: "400",
                color: "#848689",
              }}
            >
              23K Thành viên - 7 bài viết/tuần
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <button
                style={{
                  width: "300px",
                  position: "relative",
                  bottom: "15px",
                  height: "35px",
                  color: "#fff",
                  fontWeight: "600",
                  border: "none",
                  outline: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  background: "#1b74e4",
                }}
              >
                Tham gia nhóm
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RightBar;
