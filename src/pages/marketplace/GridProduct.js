import { Grid, Paper } from "@mui/material";
import "./marketplace.css";
function GridProduct({ img, price, name, place }) {
  return (
    <Grid item xs={3}>
      <div className="market-card">
        <img src={img} alt="#" className="market-img" />
        <div className="market-card-content">
          <div className="market-card-price">{price} đ</div>
          <div className="market-card-product">{name}</div>
          <div className="market-card-place">{place}</div>
        </div>
      </div>
    </Grid>
  );
}

export default GridProduct;
