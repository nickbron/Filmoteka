import { AppBar, Toolbar, styled } from "@mui/material";
import headerBackground from "../../Images/header_desktop.jpg";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Header({ numberFavfilms }) {
  return (
    <>
      <AppBar
        sx={{ backgroundImage: `url(${headerBackground})`, height: "70px" }}
        position="fixed"
      >
        <StyledToolBar>
          <Logo />
          <Navigation numberFavfilms={numberFavfilms} />
        </StyledToolBar>
      </AppBar>
    </>
  );
}
