import { Box, Stack, Typography, Grid, Divider } from "@mui/material";
import { Place } from "@mui/icons-material";
import GridProduct from "./GridProduct";
import "../watch/watch.css";
import Sponsor from "./Sponsor";
// import Post from "../watch/Post";
const productObj = [
  [
    {
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/290572865_5255390951209068_7452124572847249561_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=sx7PvdjvI_QAX_-ZgsV&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-L25_fbtkDFTbMpLGJanj3agNEMAgry9tTlc_PiK5eRQ&oe=62BE8043",
      price: "VNPT - VinaPhone",
      name: "VNPT - VinaPhone",
      place: "Được tài trợ",
    },
    {
      img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t45.5328-4/288567336_5207018256032138_91288876595595334_n.jpg?stp=c0.159.261.261a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_ohc=PHDF68Dm84kAX_0-TlH&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9ObUL9XYQ8jtAlHuK4fnUsPDnBXZrPIeLp4jHHGiZDbw&oe=62BDF128",
      price: "1.500",
      name: "Cần thanh lý máy đã qua sử dụng",
      place: "Thủ Dầu Một",
    },
    {
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t45.5328-4/285576641_5153188244769564_1718695173332764045_n.png?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=c48759&_nc_ohc=l7_dd-13ByIAX_EXNEP&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT85LmU1UoE-aqnvol-Ndfv7PNeUNPW1caruF2D8JiV-WQ&oe=62BEAE41",
      price: "2.590.000",
      name: "Note10 Plus",
      place: "Vũng Tàu",
    },
    {
      img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t45.5328-4/286140783_5282281161837767_180482607881040382_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_ohc=9mbL0jkeciMAX-2yAAC&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8xHGrtWBI88iXRAR2sugZEXZBERpauKw3lt2qq67Qouw&oe=62BEB39D",
      price: "15",
      name: "Cần thanh lý",
      place: "Hồ Chí Minh",
    },
  ],
  [
    {
      img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t45.5328-4/286241845_5205856142826380_8285565103245891272_n.jpg?stp=c0.42.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_ohc=ZEiuKGOaMtQAX9QiimH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT_9F42ZESJhi243HJO0gr6kcFkMRX67t4H-SCBxBwfkWw&oe=62BEAAA6",
      price: "350.000",
      name: "Dao làm bếp hỏa long",
      place: "Việt Nam",
    },
    {
      img: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t45.5328-4/277615130_4971157596338387_7192958281497390210_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=fPlM8TI6wKcAX-EajJl&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT95dnAiaMk3GYNBH3CugkQ0kOl-PAubMigCUxNYc24gYQ&oe=62BE2D98",
      price: "111.000",
      name: "Ấm nước siêu tốc Flash",
      place: "Hải Phòng",
    },
    {
      img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t45.5328-4/278456547_4706362436135007_5422345942830380788_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=c48759&_nc_ohc=KB5s85_vYMcAX9515rK&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8bhUfJaDECANA1JOXwroX_55nhEvsTDJZxeDtUK_i2Og&oe=62BE7B1F",
      price: "96.000",
      name: "Ghế cong lưng",
      place: "Điện Biên Phủ",
    },
    {
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t45.5328-4/280209233_5433623806650587_7149232268499040693_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=c48759&_nc_ohc=buet-GRYFQ0AX_aERko&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT91uckpu8PPho_ZrcHnTC6l0Z1y9Zfo_DhpNM4PILOcCg&oe=62BEA69F",
      price: "800.000",
      name: "Bàn DJ Sanaky",
      place: "Vũng Tàu",
    },
  ],
];
function Feet() {
  return (
    <Box flex={6.5} sx={{ position: "relative" }}>
      <Stack
        direction="row"
        sx={{ paddingTop: "12px", paddingBottom: "30px", width: "100%" }}
        spacing={82}
      >
        <Typography
          sx={{ fontSize: "19px", fontWeight: "600", paddingRight: "40px" }}
        >
          Lựa chọn hôm nay
        </Typography>
        <Stack direction="row" alignItems="center">
          <Place fontSize="small" sx={{ color: "#3086f3" }} />
          <Typography sx={{ color: "#3086f3", cursor: "pointer" }}>
            Biên Hòa - 60km
          </Typography>
        </Stack>
      </Stack>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container columnSpacing={2} rowSpacing={3}>
        <GridProduct
          img="https://s.memehay.com/files/posts/20210331/hinh-anh-rat-nhieu-dao-phong-lon-de-tren-ban.jpeg"
          price="200.000"
          name="Fóng lợn xs max pro vjp"
          place="Dân Tổ Gang"
        />
        <GridProduct
          img="https://scontent.fsgn2-6.fna.fbcdn.net/v/t45.5328-4/287038707_4730789447025164_5158093884950219007_n.jpg?stp=c0.102.261.261a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=c48759&_nc_ohc=5LbUE8O7XGYAX9g0SvU&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT8xrK9SORTRPlpEbhTYFPHMXSEOrayXAeg9M3Wt0Oud9g&oe=62BD4689"
          price="16.000.000"
          name="IPhone 13 Pro Max"
          place="Hà Nội"
        />
        <GridProduct
          img="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/290433294_777732323668893_7233384697743463365_n.jpg?stp=c0.258.640.640a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=843cd7&_nc_ohc=Qr_1387r40MAX-HafQN&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT928vm8b9PYLDg0U_YuY-kQJ-UTH-hbsFonDeSXzRAs5w&oe=62BDD08B"
          price="15"
          name="Dream chiến"
          place="Sóng Bé"
        />
        <GridProduct
          img="https://scontent.fsgn2-1.fna.fbcdn.net/v/t45.5328-4/287117440_4889441591160717_5453399603388674619_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_ohc=y3EiE8VhFRUAX-G1Ohn&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_wJYc7ytbQ2cyDS4z0TFsF8KpGE_lfupvWN7HuWS6cJQ&oe=62BE1A35"
          price="3.000.000"
          name="Laptop HP lướt web"
          place="Hồ Chí Minh"
        />
        <GridProduct
          img="https://scontent.fsgn2-2.fna.fbcdn.net/v/t45.5328-4/280043410_4699703033474838_7932967201688638353_n.png?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=7SkFDfjPKmQAX-7ALZL&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_2UL9w-H0fSBWxXsQgo1xk1pGjP5zU1_IEM9HMbqGvZg&oe=62BED37E"
          price="430.000"
          name="Loa thiếu nước"
          place="Biên Hòa"
        />
        <GridProduct
          img="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/288512954_137283632264373_9196384248027175561_n.jpg?stp=c44.0.260.260a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=843cd7&_nc_ohc=beKm7pCTnMsAX8nvfyX&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_waoO5Udol0H29eJhf3yIzie-VyqU_dFsOeZean53oYw&oe=62BD8A94"
          price="22.00.000"
          name="Vision mới trộm"
          place="Dĩ An"
        />
        <GridProduct
          img="../../../img/str15.jpg"
          price="0"
          name="Bán Nô lệ châu phi"
          place="Vũng tàu"
        />
        <GridProduct
          img="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/290317760_454896879972128_4949050055412559514_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=843cd7&_nc_ohc=pu_iVUG6atMAX-SL2Tz&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT87U68CNYKX7x255NAgfP7NA0bgJh4_PxvbgNs03imbuQ&oe=62BD45E4"
          price="123"
          name="Chiến mã Lữ Bố"
          place="Hồ Chí Minh"
        />
        <GridProduct
          img="https://scontent.fsgn2-6.fna.fbcdn.net/v/t45.5328-4/274074488_5323619257669413_1065241869682547061_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=c48759&_nc_ohc=BFOnzhJi_TUAX9X4UOu&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-ZvE3mV10bSdRiH9MQPCbNJKiwtjXqNqCDYd6yHlvWCg&oe=62BE4037"
          price="70.000.000"
          name="Macbook Retina giá hạt nhân"
          place="Thủ Dầu Một"
        />
        <GridProduct
          img="https://scontent.fsgn2-1.fna.fbcdn.net/v/t45.5328-4/280847581_5240687166039250_8758317699974715780_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_ohc=D7GHIE0G71QAX--K0fA&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-Xo4Q6D1bZAcqKTqaRsO3UBIzclTpPZN_nXJ6Pt7Ij_Q&oe=62BD864B"
          price="122.000"
          name="Sofa giường"
          place="Vũng Tàu"
        />
        <GridProduct
          img="https://scontent.fsgn2-2.fna.fbcdn.net/v/t45.5328-4/279031635_5326738110780351_1607339806453989031_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=UsHPGkMSNXYAX95Xugq&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9BTk5dw7tw413cfHliG9EmLS_wECB4KqjK_QsCWNL2EA&oe=62BE6FF6"
          price="0.00001"
          name="Nokia giá tốt"
          place="Dầu Tiếng"
        />
        <GridProduct
          img="https://scontent.fsgn2-5.fna.fbcdn.net/v/t45.5328-4/287079544_5504449899614112_4918028709968107974_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=c48759&_nc_ohc=X0noAqNKZegAX9-6_XB&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-Lm6F2aPrPXb8rqpRkYbbyfWpm7B4Cai0MXRIJYm7f4A&oe=62BD8BE2"
          price="100.000"
          name="tai nghe Bluetooth"
          place="Biên Hòa"
        />
        <GridProduct
          img="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/290522032_2224911637685272_1932692760706061771_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=843cd7&_nc_ohc=dTXfX_TNKVgAX_8d91e&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-7qM-mynnI2h0v_OablWOg4KyrpbCA23DDC84pdN-54A&oe=62BF1D6F"
          price="3"
          name="KS LUXURY màu đỏ CR5"
          place="Bến Cát"
        />

        <GridProduct
          img="https://cdn.pixabay.com/photo/2021/04/30/16/47/bitcoin-logo-6219385_1280.png"
          price="200.000"
          name="Bít coi"
          place="Việt Nam"
        />
        <GridProduct
          img="https://cafebiz.cafebizcdn.vn/162123310254002176/2021/5/14/gold-9fb798469f4d77a9d040678a212c2d71-carat-gold-most-expensive-15701624854841638745280-1620994586305988023631.jpg"
          price="999.999"
          name="Giấy chùi đ*t vàng"
          place="Hồ Chí Minh"
        />
        <GridProduct
          img="https://cafefcdn.com/203337114487263232/2021/5/15/photo-4-1621056583775448629482.jpg"
          price="42.000"
          name="Gucci LUXURY 9999"
          place="Việt Nam"
        />
      </Grid>
      {/* </Box> */}
      <Divider sx={{ marginBottom: "20px", marginTop: "50px", width: "97%" }} />
      <Sponsor category="Được Tài trợ" obj={productObj[0]} />
      <Divider sx={{ marginBottom: "20px", marginTop: "50px", width: "97%" }} />
      <Sponsor category="Đồ gia dụng" obj={productObj[1]} />
      <Divider sx={{ marginBottom: "20px", marginTop: "50px", width: "97%" }} />
    </Box>
  );
}

export default Feet;
