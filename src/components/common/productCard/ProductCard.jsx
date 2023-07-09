import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card key={item.id} sx={{ width: 300, height: 390, margin: 2 }}>
      <CardMedia sx={{ height: 190 }} image={item.img} title={item.tittle} />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {item.tittle}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ItemDetail/${item.id}`}>
          <Button variant="contained" color="primary" size="small">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
