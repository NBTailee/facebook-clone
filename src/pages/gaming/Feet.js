import { Box, Stack, Typography, Grid, Button, Avatar } from "@mui/material";

function Feet() {
  return (
    <Box flex={5} sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <Box
        sx={{
          bgcolor: "#fff",
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={65}>
          <Typography
            sx={{
              padding: "10px 0 10px 20px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Hoạt động gần đây
          </Typography>
          <Button
            sx={{
              fontSize: "15px",
              color: "#1b74e4",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            Xem tất cả
          </Button>
        </Stack>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", padding: "1px 0 20px 20px" }}
        >
          <Grid item xs={4}>
            <Avatar
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/278022529_4878600265589923_4355373816123132918_n.jpg?stp=dst-jpg_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=3170a5&_nc_ohc=HmERJGYa_aUAX8XwPEK&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9-lbfqL2kx5YF7CwLOOaijqfKN4OE8ryiiF42hMaWyWQ&oe=62BFCA56"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
            <Typography
              sx={{
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
                position: "absolute",
                top: "280px",
                zIndex: "4",
                marginLeft: "10px",
              }}
            >
              Quitapena Mza
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bgcolor: "rgb(175 172 172 / 50%)",
                top: "138px",
                zIndex: "3",
                width: "180px",
                height: "180px",
              }}
            ></Box>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src="https://cdn1.dotesports.com/wp-content/uploads/2022/02/22001716/streaming-is-real-job-says-xqc-theres-stigma-around-streaming-as-a-job-its-fucking-harder.jpg"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
            <Typography
              sx={{
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
                position: "absolute",
                top: "280px",
                zIndex: "4",
                marginLeft: "10px",
              }}
            >
              xQc rage lord
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bgcolor: "rgb(175 172 172 / 50%)",
                top: "138px",
                zIndex: "3",
                width: "180px",
                height: "180px",
              }}
            ></Box>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src="https://i.pinimg.com/736x/6c/60/00/6c6000e478c0d513b3b5c7eeaa6ae493.jpg"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
            <Typography
              sx={{
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
                position: "absolute",
                top: "280px",
                zIndex: "4",
                marginLeft: "10px",
              }}
            >
              Asian Streaming
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bgcolor: "rgb(175 172 172 / 50%)",
                top: "138px",
                zIndex: "3",
                width: "180px",
                height: "180px",
              }}
            ></Box>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src="https://gamek.mediacdn.vn/133514250583805952/2022/4/4/photo-1-1649074061916567748452.jpg"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
            <Typography
              sx={{
                fontSize: "15px",
                color: "#fff",
                fontWeight: "600",
                position: "absolute",
                top: "280px",
                zIndex: "4",
                marginLeft: "10px",
              }}
            >
              Ma Geming :v
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bgcolor: "rgb(175 172 172 / 50%)",
                top: "138px",
                zIndex: "3",
                width: "180px",
                height: "180px",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginTop: "15px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={65}>
          <Typography
            sx={{
              padding: "10px 0 10px 20px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Game đáng chú ý
          </Typography>
          <Button
            sx={{
              fontSize: "15px",
              color: "#1b74e4",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            Xem tất cả
          </Button>
          {/* rgb(175 172 172 / 50%) */}
        </Stack>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", padding: "1px 0 20px 20px" }}
        >
          <Grid item xs={4}>
            <Avatar
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.2081-6/274984320_1142548843160265_5819871793532399936_n.jpg?stp=dst-jpg_p600x313&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=59ibhTwigwUAX_IlT58&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8lM7ZwV0MG421V2KDjkNYDd9lvK3hhaOha4Dedmb6tiw&oe=62C01B63"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.2081-6/152345444_809557542998732_4706619638057935084_n.jpg?stp=dst-jpg_p600x313&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=Ez_6vcBSXe8AX8B-xfV&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT845FCWddY1U1HaW9CkQSyuLEQgjaSuiZetkWDbtqXYCg&oe=62C04B06"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.2081-6/273353247_1808437342698969_5581601782226002040_n.jpg?stp=dst-jpg_p600x313&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=2infDC47wv0AX8HiaqL&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT__rcZN7feZ2aDz4OTm0uMmMb6UQaUd8aUB9zK51MLd5Q&oe=62BFBF00"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.2081-6/17634254_432529620433085_7532949879258087424_n.jpg?stp=dst-jpg_p600x313&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=hZgDMpvuRJIAX-7bC3z&tn=c7RL3FztuUPaO1x5&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_JGY90RnT_pY5lur5niDirMScik__URmo3gqpDZ4cUhg&oe=62C18788"
              variant="rounded"
              sx={{ width: "180px", height: "180px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Feet;
