import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));
function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link
        color="inherit"
        underline="none"
        href="https://www.linkedin.com/in/nick-balabukh/"
      >
        Nick_bron
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function Footer({ description }) {
  return (
    <Typography
      component="footer"
      sx={{
        // display: "flex",

        flexDirection: "column",
        alignItems: "center",
        bgcolor: "ButtonShadow",

        height: 80,
        mt: 80,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          <Copyright />
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
      </Container>
    </Typography>
  );
}
