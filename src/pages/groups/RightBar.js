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
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240435322_248620130534901_4933585101364454590_n.png?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=8631f5&_nc_ohc=VfqryWVGZcUAX9uZ8Ht&_nc_oc=AQk9qhfj9zF2b6UZA0XEtsNGaZIq9L5UHuKy5PYdZpZUqxArsv1aJnFoIBZB6tFxAU_khOmnrysubmrvO0jzZ_1F&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-8M7MEic6L23dPw0Xts9RM9quvo4BPMqroDf2ZKlFMXg&oe=62BFE670"
            />
            <IconButton
              sx={{
                position: "relative",
                bottom: "245px",
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
                bottom: "339px",
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
