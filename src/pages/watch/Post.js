import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// import "../../components/Feet/status.css";
import "./watch.css";
import {
  Divider,
  IconButton,
  AvatarGroup,
  Box,
  Button,
  Stack,
  Badge,
  ThemeProvider,
} from "@mui/material";
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

function Post({
  avatar,
  name,
  date,
  content,
  img,
  more,
  cmtCount,
  enableLike,
  watchCount,
  likeCount,
  type,
}) {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(enableLike);
  return (
    <Box>
      <ThemeProvider theme={themeColor}>
        <Card sx={{ maxWidth: { xs: "74%", lg: "100%" }, marginTop: "10px" }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} src={avatar}></Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreHoriz />
              </IconButton>
            }
            title={name}
            subheader={date}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
          <Divider />
          <CardMedia
            component="img"
            height="15%"
            image={img}
            alt="Paella dish"
          />
          <Divider />
          <Stack direction="row" sx={{ padding: "0 10px" }} spacing={40}>
            <CardActions disableSpacing>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ width: "270px", position: "relative", margin: "0 auto" }}
              >
                {like === true ? (
                  <Button
                    sx={{ textTransform: "capitalize", fontSize: "12px" }}
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
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "12px",
                      color: "#616161",
                    }}
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
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "12px",
                    color: "#616161",
                  }}
                  size="small"
                  startIcon={<ChatBubbleOutline />}
                  variant="text"
                >
                  Bình luận
                </Button>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "12px",
                    color: "#616161",
                  }}
                  size="small"
                  startIcon={<Share />}
                  variant="text"
                >
                  Chia sẻ
                </Button>
              </Stack>
            </CardActions>
            <Box
              className="emo-count"
              sx={{
                position: "relative",
                padding: "11px 0 4px 0",
                width: "200px",
              }}
            >
              <AvatarGroup
                sx={{ position: "relative", right: "310px" }}
                max={1}
              >
                {type === "like" ? (
                  <Avatar
                    sx={{ width: "18px", height: "18px" }}
                    alt="Travis Howard"
                    src="https://symbols.vn/wp-content/uploads/2021/11/Bieu-tuong-like-PNG.png"
                  />
                ) : (
                  <Avatar
                    sx={{ width: "18px", height: "18px" }}
                    alt="Travis Howard"
                    src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/31072997_171464836888574_2500709605328289792_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=buLn0vw4wtIAX-Qycjv&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-3a1Hv6CL0a9gMTkSVKKklhoCk90awPYw2QKa7EBcs_w&oe=62D575CD"
                  />
                )}
              </AvatarGroup>
              <Typography
                sx={{
                  position: "absolute",
                  top: { xs: "10px", lg: "13px" },
                  left: { xs: "10px", lg: "-104px" },
                  fontSize: { xs: "10px", lg: "12px" },
                  color: "#616161",
                }}
              >
                {like === true ? "Bạn và " : ""}
                {more} {likeCount} người khác
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: { xs: "10px", lg: "13px" },
                  right: "90px",
                  fontSize: { xs: "10px", lg: "12px" },
                  color: "#616161",
                }}
              >
                {cmtCount} bình luận
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: { xs: "10px", lg: "13px" },
                  right: "-10px",
                  fontSize: { xs: "10px", lg: "12px" },
                  color: "#616161",
                }}
              >
                {watchCount} lượt xem
              </Typography>
            </Box>
          </Stack>
          <Divider />

          {/* <Divider /> */}
          {show === true ? (
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
                className="comment-input-watch"
              />
              <Stack
                direction="row"
                spacing={0}
                sx={{ position: "absolute", left: "620px" }}
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
                  <CameraAltOutlined fontSize="small" sx={{ width: "18px" }} />
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
          ) : (
            ""
          )}
        </Card>
      </ThemeProvider>
    </Box>
  );
}

export default Post;
