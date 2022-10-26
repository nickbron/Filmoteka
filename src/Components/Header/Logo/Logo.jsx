import { IconButton, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";

export default function Logo() {
  return (
    <>
      <Link underline="none" component={NavLink} to="/films">
        <IconButton edge="start" color="success">
          <TheatersIcon />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Filmoteka
          </Typography>
        </IconButton>
      </Link>
    </>
  );
}
