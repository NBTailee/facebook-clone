import GridProduct from "./GridProduct";
import {
  Divider,
  Grid,
  Typography,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import "./marketplace.css";

function Sponsor({ category, obj }) {
  return (
    <Box>
      <Stack direction="row" alignItems="center" sx={{ marginBottom: "45px" }}>
        <Typography sx={{ fontSize: "19px", fontWeight: "600" }}>
          {category}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ position: "absolute", right: "25px" }}
        >
          <a href="#" className="a-tag">
            Xem tất cả
          </a>
          <IconButton sx={{ marginLeft: "20px" }}>
            <MoreHoriz />
          </IconButton>
        </Stack>
      </Stack>
      <Grid container columnSpacing={2} rowSpacing={3}>
        {obj.map((item) => (
          <GridProduct
            img={item.img}
            price={item.price}
            name={item.name}
            place={item.place}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Sponsor;
