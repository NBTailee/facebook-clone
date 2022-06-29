import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import "../../components/Feet/status.css";
import { styled } from "@mui/material/styles";
import "./groups.css";
import {
  Divider,
  IconButton,
  AvatarGroup,
  Box,
  Button,
  Stack,
  Badge,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Comment from "./Comment";
import { red } from "@mui/material/colors";
import { themeColor } from "../../App";
import {
  MoreHoriz,
  Share,
  Favorite,
  ThumbUp,
  ChatBubbleOutline,
  CameraAltOutlined,
  GifBoxOutlined,
  SentimentSatisfiedOutlined,
  AddPhotoAlternateOutlined,
} from "@mui/icons-material";
import { useState } from "react";
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 29,
  height: 29,
  border: `2px solid ${theme.palette.background.paper}`,
}));
function Post({
  avatar,
  name,
  date,
  content,
  img,
  cmtCount,
  enableLike,
  GroupAvatar,
  enableImgActive,
  likeCount,
  moreCmt,
  cmtList,
}) {
  const [show, setShow] = useState(true);
  const [like, setLike] = useState(enableLike);
  const [imgActive, setimgActive] = useState(enableImgActive);
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <ThemeProvider theme={themeColor}>
        <Card sx={{ maxWidth: { xs: "74%", lg: "100%" }, marginTop: "10px" }}>
          <CardHeader
            // sx={{ fontSize: "20px" }}
            avatar={
              <Badge
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<SmallAvatar src={avatar} />}
              >
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: red[500] }}
                  src={GroupAvatar}
                ></Avatar>
              </Badge>
            }
            action={
              <IconButton aria-label="settings">
                <MoreHoriz />
              </IconButton>
            }
            title={name}
            subheader={date}
          />
          {imgActive === false ? (
            <div>
              <CardContent>
                <Typography variant="h8" sx={{ color: "f3f3f3" }}>
                  {content}
                </Typography>
              </CardContent>
            </div>
          ) : (
            <div>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {content}
                </Typography>
              </CardContent>
            </div>
          )}
          {imgActive === true ? (
            <div>
              <Divider />
              <CardMedia
                component="img"
                height="15%"
                image={img}
                alt="Paella dish"
              />
            </div>
          ) : (
            <div></div>
          )}
          <Divider />
          <Box
            className="emo-count"
            sx={{ position: "relative", padding: "8px 0", right: "55px" }}
          >
            <AvatarGroup sx={{ position: "relative", right: "582px" }} max={3}>
              <Avatar
                sx={{ width: "18px", height: "18px" }}
                alt="Travis Howard"
                src="https://static.cdnlogo.com/logos/f/83/facebook-reaction-haha.svg"
              />
              <Avatar
                sx={{ width: "18px", height: "18px" }}
                alt="Remy Sharp"
                src="https://symbols.vn/wp-content/uploads/2021/11/Bieu-tuong-like-PNG.png"
              />
            </AvatarGroup>
            <Typography
              sx={{
                position: "absolute",
                left: "112px",
                top: "9px",
                fontSize: "15px",
                color: "#65676b",
              }}
            >
              {likeCount}
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: { xs: "10px", lg: "8px" },
                right: "-20px",
                fontSize: { xs: "12px", lg: "15px" },
                color: "#616161",
              }}
            >
              {cmtCount} bình luận
            </Typography>
          </Box>
          <Divider />
          <CardActions disableSpacing>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "500px", position: "relative", margin: "0 auto" }}
            >
              {like === true ? (
                <Button
                  sx={{ textTransform: "capitalize" }}
                  size="small"
                  startIcon={<ThumbUp />}
                  variant="text"
                  onClick={() => {
                    setLike(!like);
                  }}
                >
                  Thích
                </Button>
              ) : (
                <Button
                  sx={{ textTransform: "capitalize", color: "#616161" }}
                  size="small"
                  startIcon={<ThumbUp />}
                  variant="text"
                  onClick={() => {
                    setLike(!like);
                  }}
                >
                  Thích
                </Button>
              )}
              <Button
                onClick={() => {
                  setShow(!show);
                }}
                sx={{ textTransform: "capitalize", color: "#616161" }}
                size="small"
                startIcon={<ChatBubbleOutline />}
                variant="text"
              >
                Bình luận
              </Button>
              <Button
                sx={{ textTransform: "capitalize", color: "#616161" }}
                size="small"
                startIcon={<Share />}
                variant="text"
              >
                Chia sẻ
              </Button>
            </Stack>
          </CardActions>
          <Divider />
          {show === true ? (
            <Box>
              <Stack direction="row" spacing={1} sx={{ padding: "10px" }}>
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
                  <Avatar src="../../../img/str1.jpg" variant="dot" />
                </Badge>
                <input
                  placeholder="Viết bình luận..."
                  className="comment-input"
                />
                <Stack
                  direction="row"
                  spacing={0}
                  sx={{ position: "absolute", left: "860px" }}
                >
                  <IconButton>
                    <Favorite fontSize="small" sx={{ width: "18px" }} />
                  </IconButton>
                  <IconButton>
                    <SentimentSatisfiedOutlined
                      fontSize="small"
                      sx={{ width: "18px" }}
                    />
                  </IconButton>
                  <IconButton>
                    <CameraAltOutlined
                      fontSize="small"
                      sx={{ width: "18px" }}
                    />
                  </IconButton>
                  <IconButton>
                    <GifBoxOutlined fontSize="small" sx={{ width: "18px" }} />
                  </IconButton>
                  <IconButton>
                    <AddPhotoAlternateOutlined
                      fontSize="small"
                      sx={{ width: "18px" }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              {cmtList.map((item) => {
                return (
                  <Comment
                    avatar={item.avatar}
                    name={item.name}
                    content={item.content}
                    time={item.time}
                  />
                );
              })}

              <Typography
                sx={{
                  position: "relative",
                  left: "12px",
                  bottom: "4px",
                  fontWeight: "600",
                  color: "#65676b",
                  fontSize: "15px",
                }}
                className="chip-comment"
              >
                Xem thêm {moreCmt} bình luận
              </Typography>
            </Box>
          ) : (
            ""
          )}
        </Card>
      </ThemeProvider>
    </Box>
  );
}

export default Post;
