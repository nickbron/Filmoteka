// import { NavigLink, Navig } from "./Navigation.styled";

// export default function Navigation() {
//   return (
//     <Navig sx={{ my: 1, mx: 1.5 }}>
//       <NavigLink to="/films">Home</NavigLink>
//       <NavigLink to="/myLibrary">MyLibrary</NavigLink>
//       <NavigLink to="/about">About</NavigLink>
//     </Navig>
//   );
// }
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

const rightLink = {
  color: "common.white",
  ml: 3,
  "&.active": {
    color: "blue",
  },
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
          Home
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
        <Link
          variant="h6"
          underline="none"
          component={NavLink}
          to="/about"
          sx={rightLink}
        >
          About
        </Link>
      </Box>
    </>
  );
}
