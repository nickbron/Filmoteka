import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

const rightLink = {
  color: "common.white",
  ml: 3,
  // "&.active": {
  //   color: "blue",
  // },
  "&:hover, &:focus": {
    color: "blue",
  },
};

export default function Navigation() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Link
          variant="h6"
          underline="none"
          component={NavLink}
          to="/films"
          sx={rightLink}
        >
          Films
        </Link>
        <Link
          variant="h6"
          underline="none"
          component={NavLink}
          to="/search"
          sx={rightLink}
        >
          Search
        </Link>
        <Link
          variant="h6"
          underline="none"
          component={NavLink}
          to="/myLibrary"
          sx={rightLink}
        >
          MyLibrary
        </Link>
      </Box>
    </>
  );
}
