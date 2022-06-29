import { Box } from "@mui/material";
import Story from "./Story";
import Status from "./Status";
import Post from "./Post";
const commentList = [
  [
    {
      avatar:
        "https://pbs.twimg.com/profile_images/1265959375207903232/SYYq5yKJ_400x400.jpg",
      name: "Phúc An Nhiên",
      content:
        "Dịch vụ bên lon.vn tôi đánh giá cao vì nhân viên phục vụ rất nhiệt tình",
      time: "Vừa xong",
    },
    {
      avatar:
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/229703776_1268658543565831_2518618770794049158_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sUXf_ZgN9W8AX89UtwH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_ZOfrbwZ7ZJT5HNlv0CI9mQqreMFQ42QlLGz0eYdxO1A&oe=62B96121",
      name: "Phước Liên Kết",
      content: "10 điểm",
      time: "Vừa xong",
    },
  ],
  [
    {
      avatar:
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/167372717_463341765008109_4684160886805043960_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZxSm8QkaGpYAX96H39u&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9YpVTHSFbJq_BI1cjxm0DgaTIfQRVca8f5KZtoKLyOOA&oe=62D2B38D",
      name: "Đức Tài",
      content: "Em pass lại tủ lạnh anh mua ko",
      time: "20 giờ",
    },
  ],
  [
    {
      avatar:
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/275288485_501693098201800_6877783614788937850_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hmlDor80uDEAX-E4g8k&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-K6sy5xRrOGH5xjoFds460A42s4TC-_GHbFR6QK7tYOg&oe=62B88645",
      name: "Bắc ker",
      content: "Các em gái cứ từ từ anh rep hết inbox không phải lo",
      time: "3 ngày",
    },
    {
      avatar:
        "https://inkythuatso.com/uploads/images/2022/04/anh-gai-xinh-che-mat-voi-mu-040406213-04-09-04-29.jpg",
      name: "Mỹ Linh",
      content: "Anh ơi cho em làm quen ạ",
      time: "3 ngày",
    },
    {
      avatar:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/271241978_998485581069891_6652549594922500611_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xRi95JFtZ8gAX-2F3JO&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT95tjGLR92BMPQ9mbrNbMBVS0Ume9XMZ9OIj6_jCM5mrQ&oe=62B8C0E6",
      name: "Vũ Lít",
      content: "Hello anh đẹp zai",
      time: "3 ngày",
    },
  ],
];
function Feet() {
  return (
    <Box
      bgcolor="#eeeeee"
      sx={{ borderRadius: "10px", marginLeft: "0 !important" }}
      flex={3}
      p={2}
    >
      <Story />
      <Status />
      <Post
        moreCmt="6000"
        cmtList={commentList[0]}
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErgE75QdALQ1DRrbIC1NXIB_VNF2u-T95mw&usqp=CAU"
        name="Johnny Sin"
        date="3 mins ago"
        content="Ai có nhu cầu mua lon thì vô lon.vn để mua nha giá rẻ sale 30%"
        img="https://www.itourvn.com/images/easyblog_articles/645/b2ap3_large_the-pig-in-traditional-asian-belief-cover.jpg"
        more="Phạm Phúc"
        cmtCount="6969"
        enableLike={true}
      />
      <Post
        moreCmt="13"
        cmtList={commentList[1]}
        avatar="https://icdn.dantri.com.vn/thumb_w/660/2021/08/17/okalumnibai-10pham-huy-hoangver-12docx-1629211989482.png"
        name="Chú sửa tủ lạnh đẹp trai"
        date="1 ngày trước"
        content="Nhận full job sửa tủ lạnh"
        img="https://dienlanhbachkhoabks.com/wp-content/uploads/2022/02/te1bba720le1baa1nh204-1.jpg"
        more="Trần Thuận"
        cmtCount="14"
      />
      <Post
        moreCmt="9221"
        cmtList={commentList[2]}
        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/275288485_501693098201800_6877783614788937850_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Twio1n4Oc_4AX8tzpyZ&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-5drA3CkArsGJdjPfpDu8W8fRQE5tnuYOwwoA1Zch65Q&oe=62B68C05"
        name="Bắc ker"
        date="4 ngày trước"
        content="seo phi thấy được một anh đẹp zai xứng đáng có 10 người yêu"
        img="https://thumbs.gfycat.com/SlimyJoyfulBactrian-size_restricted.gif"
        more="Quyền cu"
        cmtCount="9999"
      />
    </Box>
  );
}

export default Feet;
