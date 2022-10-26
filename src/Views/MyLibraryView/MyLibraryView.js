import { Box, Button, Grid } from "@mui/material";
import { mergeBreakpointsInOrder } from "@mui/system";
import CardFilm from "Components/CardFilm/CardFilm";
import { useEffect, useState } from "react";
import { GetFilmByID } from "Services/api";

export default function MyLibraryView() {
  const filmId = JSON.parse(localStorage.getItem("data"));

  console.log(filmId);

  return <></>;
}
