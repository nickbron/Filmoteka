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
      <Link to={`${pathname}/${movieId}`}>
        <Card sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            height="auto"
            image={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              display="block"
              variant="caption"
              color="text.secondary"
            >
              {date && new Date(date).getFullYear()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
}
