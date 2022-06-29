import {
  Box,
  ListItemButton,
  Avatar,
  ListItemText,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import "./watch.css";
import Post from "./Post";
function Feet() {
  return (
    <Box flex={4.5} sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "140px",
          bgcolor: "#ffffff",
          borderRadius: "6px",
          zIndex: "-1",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "20px",
            fontWeight: "600",
            padding: "12px 0 12px 12px",
          }}
        >
          Video mới dành cho bạn <li style={{ paddingLeft: "10px" }}>4</li>
        </Typography>
        <Stack direction="row" sx={{ zIndex: "-1" }}>
          <ListItemButton
            className="watch-card"
            flex={1}
            sx={{
              borderRadius: "8px",
              height: "75px",
              margin: "0 8px 15px 12px",
              zIndex: "6",
            }}
          >
            <IconButton
              className="watch-card-btn"
              sx={{
                transition: "0.2s ease-in-out",
                opacity: "0",
                zIndex: "10",
                position: "absolute",
                top: "21px",
                left: "335px",
              }}
            >
              <MoreHoriz sx={{ zIndex: "10" }} />
              <div
                className="all-overlap-btn"
                style={{
                  bgcolor: "#eeeeee !important",
                  zIndex: "8 !important",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                }}
              ></div>
            </IconButton>
            <Avatar
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/261053231_2261251027347262_3948043119798212980_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=VorovOB7PEoAX_unpXb&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-fgoXt_sC86MTh2euWZrXsAmnzLVBwH-7mb6L3swghmQ&oe=62BA0803"
              sx={{ width: "60px", height: "60px" }}
            />
            <ListItemText
              sx={{ marginLeft: "12px" }}
              primary="Video mới của Nguyễn Hữu Trí và những người khác."
              secondary="1 video mới"
            />
          </ListItemButton>
          <ListItemButton
            className="watch-card"
            flex={1}
            sx={{
              borderRadius: "8px",
              height: "75px",
              margin: "0 8px 15px 12px",
            }}
          >
            <IconButton
              className="watch-card-btn"
              sx={{
                transition: "0.2s ease-in-out",
                opacity: "0",
                zIndex: "10",
                position: "absolute",
                top: "21px",
                left: "364px",
              }}
            >
              <MoreHoriz sx={{ zIndex: "10" }} />
              <div
                className="all-overlap-btn"
                style={{
                  bgcolor: "#eeeeee !important",
                  zIndex: "9 !important",
                  position: "absolute",
                }}
              ></div>
            </IconButton>
            <Avatar
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/49388058_1193239107484033_541060850165743616_n.jpg?stp=c14.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=mR056_ngKfMAX-LKD5S&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-Pnncor8odHOC2Df862KKR3GSCpD_u11cQ6zubdaiEzA&oe=62D9180F"
              sx={{ width: "60px", height: "60px" }}
            />
            <ListItemText
              sx={{ marginLeft: "12px" }}
              primary="Bác Sĩ Gấu CTUMP và những người khác đã phát trực tiếp."
              secondary="5 giờ trươc"
            />
          </ListItemButton>
        </Stack>
      </Box>
      <Post
        type="like"
        content="Nuôi tham vọng thương hiệu Nerman sẽ lớn mạnh và phát triển như Xmen, liệu rằng đó có phải là hướng đi đúng cho startup?"
        img="https://i.ytimg.com/vi/kQu8AdcxlIY/maxresdefault.jpg"
        enableLike={true}
        name="Shark Tank Việt Nam"
        date="Được tài trợ"
        cmtCount="722"
        watchCount="99.2K"
        likeCount="23K"
        avatar="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/283139142_3258985951088349_6455119359606250558_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=5exJ8h9bc28AX_jpoha&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9wd_-CYXKWkdoUY4E-OP5eqbPnlN4FqQ7jDAH-COzmRg&oe=62B9DCBE"
      />
      <Post
        type="heart"
        content="Liệu đẹp có là tất cả?"
        img="https://i.ytimg.com/vi/PldsDqFnNK0/maxresdefault.jpg"
        enableLike={true}
        name="Nguyễn Hữu Trí"
        date="Được tài trợ"
        cmtCount="221"
        watchCount="329K"
        likeCount="113K"
        avatar="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/261053231_2261251027347262_3948043119798212980_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=VorovOB7PEoAX_unpXb&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-fgoXt_sC86MTh2euWZrXsAmnzLVBwH-7mb6L3swghmQ&oe=62BA0803"
      />
      <Post
        content="Sáu năm thanh xuân của bác sĩ Gấu"
        img="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/183112576_1907055562769047_8135341086547334093_n.png?stp=dst-png_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoibyJ9&_nc_ohc=oP9MLWlVaAMAX9kvAvx&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9RjOa-WetAw02UppvE5q6OYlINHkPDtTVL_zqmN5fA1A&oe=62DF136A"
        enableLike={false}
        name="Bác Sĩ Gấu CTUMP"
        date="Được tài trợ"
        cmtCount="177"
        watchCount="57.3K"
        likeCount="12K"
        avatar="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/49388058_1193239107484033_541060850165743616_n.jpg?stp=c14.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=mR056_ngKfMAX-LKD5S&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-Pnncor8odHOC2Df862KKR3GSCpD_u11cQ6zubdaiEzA&oe=62D9180F"
      />
    </Box>
  );
}

export default Feet;
