import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundView from "./Views/NotFoundView/NotFoundView";
import MyLibraryView from "./Views/MyLibraryView/MyLibraryView";
import FilmDetailView from "./Views/FilmDetailView/FilmDetailView";
import AboutView from "./Views/About/AboutView";
import TrendingView from "./Views/TrendingView/TrendingView";
import Header from "./Components/Header/Header";
import Container from "@mui/material/Container";
import Footer from "Components/Footer/Footer";
import { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import blue from "@mui/material/colors/blue";
import SearchView from "Views/SearchView/SearchView";

export default function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: blue,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Container sx={{ mt: "1rem" }}>
          <Routes>
            <Route path="/" element={<Navigate to="films " />} />
            <Route path="films" element={<TrendingView />} />
            <Route path="search" element={<SearchView />} />
            <Route path="myLibrary" element={<MyLibraryView />} />
            <Route path="*" element={<NotFoundView />} />
            <Route path="films/:filmId" element={<FilmDetailView />} />
            <Route path="search/:filmId" element={<FilmDetailView />} />
          </Routes>
        </Container>
        <Footer description="Created by Balabukh Nick." />
      </Box>
    </ThemeProvider>
  );
}
