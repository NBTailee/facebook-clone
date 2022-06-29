import { Box, Stack, Typography } from "@mui/material";
import Post from "./Post";

const commentList = [
  [
    {
      avatar:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/240163349_2658734254434184_8205307873369492821_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Qkyq1m1AN3EAX-tquEK&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_SPhO9nv-mJDd2PMS-UtwMHcxk6eL8lXf0ZX-ss0glvQ&oe=62C055B1",
      name: "Lê Tuấn Anh",
      content: "Lười thì làm biếng đi cho nhàn ",
      time: "20 giờ",
    },
    {
      avatar:
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/278772461_2161668800657784_6564984784024688631_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=a4H03EkzVPUAX8oz3Lf&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-1aGMOdPeWdjnKZ7Wu7Q5G-YXnPjX-Mes_-OqlE9yNjA&oe=62BEBDD9",
      name: "Phước Trương",
      content:
        "với 7 năm làm design trình senior, lương trung bình 1k5 rồi, giờ có tuổi, chuyển qua bạn bắt đầu lại cạnh tranh đám nhỏ lương trung bình 7tr, với kn hiện có bạn có thể xin thực tập vừa làm vừa học.",
      time: "22 giờ",
    },
  ],
  [
    {
      avatar:
        "https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/202361685_344723953777821_6349888758368628278_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-yasENkWwngAX-R-f9J&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fpnh22-1.fna&oh=00_AT8mH2KuSzHWZUWkkJYVmqQ5fzvGXfYOfY_os2UglmEnhQ&oe=62E0D8EB",
      name: "Đoàn Quang Huy",
      content: "hell roi",
      time: "2 ngày",
    },
    {
      avatar:
        "https://scontent.fpnh22-1.fna.fbcdn.net/v/t39.30808-6/282215986_550521203284305_1380179471727734753_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4_ZGzqfDd30AX91gkxQ&_nc_ht=scontent.fpnh22-1.fna&oh=00_AT_VoHQqa8m6rNjhTqupF6TTM2dZ160beMtSPipJ83vvlA&oe=62C0172F",
      name: "Minh kỳ",
      content: "hàm răng ??",
      time: "3 ngày",
    },
  ],
];

function Feet() {
  return (
    <Box flex={4.8}>
      <Typography
        sx={{
          position: "relative",
          paddingTop: "12px",
          left: "5px",
          color: "#65676b",
        }}
      >
        Hoạt động gần nhất
      </Typography>
      <Post
        name="Cộng đồng Front-end(HTML/CSS/JS)"
        date="Tô Phương - 21 giờ"
        GroupAvatar="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/240655429_4059163764195718_3652059374269714525_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_ohc=Krcl8yORRwsAX8uyCjq&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-aGp8IySEehpg5NL3ddjUtDTNRVJEUe-LQY96G2L6YjA&oe=62BFDCCE"
        avatar="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/48375082_2362660130428217_2906915577685606400_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4VBmOot15vwAX9lCH6Y&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-ypAeH_1zni4Zvuh74CHbsgYcadx3e-UHWQclR1_pJ0A&oe=62DEAF31"
        content="Chào mấy bác.cho mình hỏi nhẹ cái 
        Lúc trc mình có học 1 khoá fontend.mà do lười với công việc chính cũng khá bận nên mình cũng k luyện nhiều.
        Trước đó mình có kinh nghiệm  4 năm làm ở vị trí vừa html/css vừa design.tổng kinh nghiệm design là gần 7 năm.nhưng mình thik làm lập trình hơn.
        Mình xin hỏi ý kiến các bác là với kinh nghiệm cùi như vậy có thể làm ở vị trí nào k ạ??
        Xin cảm ơn các bác!!!"
        enableImgActive={false}
        likeCount="64"
        cmtCount="17"
        moreCmt="9"
        cmtList={commentList[0]}
      />
      <Post
        name="Lập Trình C,C++,C#,Java, Python,PHP..."
        date="Trần Phú Quí - 26 tháng 6 lúc 16:36"
        GroupAvatar="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/96363880_2204770646331107_836141527355883520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8631f5&_nc_ohc=dKyYADFFGsAAX-Z2Yiq&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_ciAQjIKkL2rm9il6lzhnFpEBVDAnI4g4bQP3M2GA9ug&oe=62DEA153"
        avatar="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/288876244_1916967798512498_2786282943772080793_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U3E34HVHE7sAX_KzcqQ&_nc_oc=AQl_MJvB0B8w4wNlMHifqrpvO6ber4SXE4F1jhZPb1gvvunAOCoj_NW7JLRgEb76D2J4QUQNNlZalmSXuj6hv-2z&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT96Pl6oNXGt7cME_D5yE5E4Zaz_PKexesYit79rPwbWXA&oe=62C0E14F"
        content=":))))))))))))))))))))))"
        enableImgActive={true}
        img="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/289608940_1923796737829604_468643920592790159_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=ZPXO0xSMaR8AX8MCczb&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT_lYAE3oBzWjIqtwFZA64gBoyxpA5f_z3m4uxoDZpltPw&oe=62BFA560"
        likeCount="3K"
        cmtCount="132"
        moreCmt="80"
        cmtList={commentList[1]}
      />
    </Box>
  );
}

export default Feet;
