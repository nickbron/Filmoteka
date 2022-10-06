import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import headerBackground from "../../Images/header_desktop.jpg";
import Navigation from "../Navigation/Navigation";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Header() {
  return (
    <>
      <AppBar
        sx={{ backgroundImage: `url(${headerBackground})`, height: "70px" }}
        position="fixed"
      >
        <StyledToolBar>
          <IconButton edge="start" color="inherit">
            <TheatersIcon />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Filmoteka
            </Typography>
          </IconButton>
          <Navigation />
        </StyledToolBar>
      </AppBar>
    </>
  );
}
