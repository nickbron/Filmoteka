import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import noImage from "../../Images/noImage.jpg";

export default function CardFilm({ movieId, image, title, genre, date }) {
  const newImage =
    image === null ? `${noImage}` : `https://image.tmdb.org/t/p/w500${image}`;

  const { pathname } = useLocation();

  return (
    // <CardActionArea>
    <Grid item xs={4} md={3}>
      <Link to={`${pathname}/${movieId}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            height: "100%",
            bgcolor: "ButtonShadow",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={newImage}
            alt={title}
            loading="lazy"
          />
          <CardContent>
            <Typography
              variant="subtitle2"
              gutterBottom
              textAlign="center"
              fontStyle="oblique"
              noWrap
            >
              {title}
            </Typography>
            <Typography
              display="block"
              variant="body2"
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
