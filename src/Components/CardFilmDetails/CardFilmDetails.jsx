import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
import ActorsView from "Views/ActorsView/ActorsView";
import ResponsivePlayer from "Components/ResponsivePlayer/ResponsivePlayer";
import { GetVideoByFilmId } from "Services/api";

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
  fav,
  updateNumberFavFilms,
}) {
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

  const [expanded, setExpanded] = useState(false);
  const [url, setUrl] = useState(null);
  const [checked, setChecked] = useState(() => fav);
  let arrFavourite = JSON.parse(localStorage.getItem("data")) ?? [];

  async function fetchVideo(id) {
    try {
      const response = await GetVideoByFilmId(id);
      if (response.status === 200) {
        setUrl(
          "https://www.youtube.com/watch?v=" + response.data.results[0].key
        );
      } else {
        throw new Error("Error - " + response.status);
      }
    } catch (error) {
      console.log("rejected   " + error.message);
      return null;
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleVideoClick = () => {
    fetchVideo(idFilm);
  };

  const handleCheckFavourite = () => {
    let idx = arrFavourite.indexOf(idFilm);
    if (idx !== -1) {
      arrFavourite.splice(idx, 1);
      setChecked(false);
    } else {
      setChecked(true);
      arrFavourite.push(idFilm);
    }
    localStorage.setItem("data", JSON.stringify(arrFavourite));

    updateNumberFavFilms(arrFavourite.length);
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
      {url && <ResponsivePlayer url={url} />}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            onChange={handleCheckFavourite}
            checked={checked}
          />
        </IconButton>
        <IconButton onClick={handleVideoClick} aria-label="watch trailer">
          <YouTubeIcon />
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
          <ActorsView idFilm={idFilm} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
