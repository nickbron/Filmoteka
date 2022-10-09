import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Checkbox,
  Box,
  Collapse,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Card,
  styled,
} from "@mui/material";
import CardActors from "Components/CardActors/CardActors";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardFilmDetails({
  idFilm,
  image,
  title,
  vote,
  votes,
  popularity,
  genre,
  overview,
  date,
}) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        bgcolor: "ButtonShadow",
        boxShadow: 3,
        mt: "8rem",
      }}
    >
      <Card
        sx={{
          display: { xs: "block", sm: "flex" },
          bgcolor: "inherit",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            height="auto"
            image={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
          />
        </Box>

        <CardContent>
          <Typography paragraph variant="h4" component="h1">
            {title} ({new Date(date).getFullYear()})
          </Typography>
          <Typography paragraph variant="h6" component="h2">
            Vote/Votes: {vote} / {votes}
          </Typography>
          <Typography paragraph variant="h6" component="h2">
            Popularity: {popularity}
          </Typography>
          <Typography paragraph variant="h6" component="h2">
            Original Title: {title}
          </Typography>
          <Typography paragraph variant="h6" component="h2">
            Genre:
          </Typography>
          <Typography variant="body1" align="justify" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
      </Card>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Top Billed Cast: </Typography>
          <CardActors idFilm={idFilm} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
