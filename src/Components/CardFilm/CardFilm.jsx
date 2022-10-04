import { Link, useLocation, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CardFilm({ movieId, image, title, genre, date }) {
  const { pathname } = useLocation();

  return (
    <Grid item xs={12} md={4}>
      <Link to={`${pathname}/${movieId}`} style={{ textDecoration: "none" }}>
        <Card sx={{ height: "100%", bgcolor: "ButtonShadow", boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="auto"
            image={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
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
              variant="h6"
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
