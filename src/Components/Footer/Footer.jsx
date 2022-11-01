import * as React from "react";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Copyright() {
  return (
    <>
      {"© "}
      <Link
        color="inherit"
        underline="none"
        href="https://www.linkedin.com/in/nick-balabukh/"
      >
        Nick_bron
      </Link>{" "}
      {new Date().getFullYear()}
    </>
  );
}

export default function Footer({ description }) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "ButtonShadow",
        mt: "1rem",
        width: "100%",
        padding: "8px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom paddingTop={1}>
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
    </Box>
  );
}
