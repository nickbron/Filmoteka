import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import noImage from "../../Images/noImage.jpg";

export default function CardFilm({ movieId, image, title, genre, date }) {
  const newImage =
    image === null ? `${noImage}` : `https://image.tmdb.org/t/p/w500${image}`;

  const { pathname } = useLocation();

  return (
    <Grid item xs={6} md={3}>
      <Link to={`${pathname}/${movieId}`} style={{ textDecoration: "none" }}>
        <Card sx={{ height: "100%", bgcolor: "ButtonShadow", boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="auto"
            image={newImage}
            alt={title}
            loading="lazy"
          />
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              textAlign="center"
              fontStyle="oblique"
            >
              {title}
            </Typography>
            <Typography
              display="block"
              variant="h7"
              color="text.secondary"
              textAlign="center"
            >
              {date && new Date(date).getFullYear()}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
