import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  styled,
  Link,
} from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import headerBackground from "../../Images/header_desktop.jpg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

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
          <Navigation />
        </StyledToolBar>
      </AppBar>
    </>
  );
}
