import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import noImage from "../../Images/noImage.jpg";

export default function CardActor({ image, name }) {
  const newImage =
    image === null ? `${noImage}` : `https://image.tmdb.org/t/p/w500${image}`;

  return (
    <Grid item xs={4} md={2}>
      {/* <Link to={`actor/${name}`} style={{ textDecoration: "none" }}> */}
      <Card sx={{ height: "100%", bgcolor: "ButtonShadow", boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="auto"
          image={newImage}
          alt={name}
          loading="lazy"
        />
        <CardContent>
          <Typography
            variant="h7"
            gutterBottom
            textAlign="center"
            fontStyle="oblique"
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
      {/* </Link> */}
    </Grid>
  );
}
