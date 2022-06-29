import { Box, Avatar, Stack } from "@mui/material";

function Comment({ avatar, name, content, time }) {
  return (
    <Box>
      <Stack direction="row" spacing={3} sx={{ padding: "2px 0 20px 0" }}>
        <Avatar
          sx={{
            //   width: "37px",
            //   height: "37px",
            position: "relative",
            left: "10px",
          }}
          src={avatar}
          variant="dot"
        />
        <div className="comment-container">
          <Stack direction="column" spacing={0}>
            <h5
              style={{ fontWeight: "600", marginLeft: "5px", marginTop: "1px" }}
            >
              {name}
            </h5>
            <h5 style={{ fontWeight: "500", marginLeft: "5px" }}>{content}</h5>
          </Stack>
        </div>
      </Stack>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ position: "relative", bottom: "16px", left: "75px" }}
      >
        <h6
          className="chip-comment"
          style={{ cursor: "pointer", color: "#65676b" }}
        >
          Thích
        </h6>
        <h6
          className="chip-comment"
          style={{ cursor: "pointer", color: "#65676b" }}
        >
          Phản hồi
        </h6>
        <h6
          className="chip-comment"
          style={{ cursor: "pointer", color: "#65676b" }}
        >
          Chia sẻ
        </h6>
        <h6
          className="chip-comment"
          style={{ cursor: "pointer", fontWeight: "500", color: "#65676b" }}
        >
          {time}
        </h6>
      </Stack>
    </Box>
  );
}

export default Comment;
