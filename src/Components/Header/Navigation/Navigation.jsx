import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import PageviewIcon from "@mui/icons-material/Pageview";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function Navigation({ numberFavfilms }) {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const rightLink = {
    color: "common.white",
    ml: 3,
    "&.active": {
      color: "orange",
    },
    "&:hover, &:focus": {
      color: "orange",
    },
  };
  const [numberfav, setNumberfav] = useState(0);

  useEffect(() => {
    if (numberFavfilms > 0) {
      setNumberfav(numberFavfilms);
    } else {
      const locStorage = JSON.parse(localStorage.getItem("data"));
      if (locStorage) {
        setNumberfav(locStorage.length);
      }
    }
  }, [numberFavfilms]);

  return (
    <>
      <StyledToolBar>
        <Link
          variant="h6"
          underline="none"
          component={NavLink}
          to="/films"
          sx={rightLink}
        >
          <IconButton color="inherit">
            <TheaterComedyIcon />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Films
            </Typography>
          </IconButton>
        </Link>
        <Link
          variant="h6"
          underline="none"
          component={NavLink}
          to="/search"
          sx={rightLink}
        >
          <IconButton color="inherit">
            <PageviewIcon />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Search
            </Typography>
          </IconButton>
        </Link>
        <Link
          variant="h6"
          underline="none"
          component={NavLink}
          to="/myLibrary"
          sx={rightLink}
        >
          <IconButton color="inherit">
            <Badge badgeContent={numberfav} color="error">
              <VideoLibraryIcon />
            </Badge>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MyLibrary
            </Typography>
          </IconButton>
        </Link>
      </StyledToolBar>
    </>
  );
}
