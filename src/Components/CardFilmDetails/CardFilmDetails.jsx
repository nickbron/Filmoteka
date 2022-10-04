import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

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
        mt: "8rem",
      }}
    >
      <Card
        sx={{
          display: "flex",
          bgcolor: "ButtonShadow",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <CardHeader title={title} subheader={date} />
          <CardMedia
            component="img"
            width="396 px"
            image={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
          />
        </Box>
        <Box sx={{}}>
          <CardContent>
            <Typography paragraph variant="h6" component="h2">
              Vote/Votes {vote} / {votes}
            </Typography>
            <Typography paragraph variant="body1" color="ButtonText">
              Popularity {popularity}
            </Typography>

            <Typography paragraph>Original Title {title}</Typography>
            <Typography paragraph>Genre {genre}</Typography>
            <Typography variant="body1" align="justify" color="text.secondary">
              {overview}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Box>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
            <Typography paragraph>About:</Typography>
            <Typography paragraph>{overview}</Typography>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
}
