import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundView from "./Views/NotFoundView/NotFoundView";
import MyLibraryView from "./Views/MyLibraryView/MyLibraryView";
import FilmDetailView from "./Views/FilmDetailView/FilmDetailView";
import AboutView from "./Views/About/AboutView";
import TrendingView from "./Views/TrendingView/TrendingView";
import Header from "./Components/Header/Header";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{ mt: "1rem" }}>
        <Routes>
          <Route path="/" element={<Navigate to="films " />} />
          <Route path="films" element={<TrendingView />} />
          <Route path="myLibrary" element={<MyLibraryView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="*" element={<NotFoundView />} />
          <Route path="films/:filmId" element={<FilmDetailView />} />
        </Routes>
      </Container>
    </div>
  );
}
