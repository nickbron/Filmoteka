import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import headerBackground from "../../Images/header_desktop.jpg";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <>
      <AppBar
        sx={{ backgroundImage: `url(${headerBackground})`, height: "70px" }}
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton edge="start" color="inherit">
            <TheatersIcon />
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              Filmoteka
            </Typography>
          </IconButton>
          <Navigation />
        </Toolbar>
      </AppBar>
    </>
  );
}
