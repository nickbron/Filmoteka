import { Grid, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useHref } from "react-router-dom";
import CardFilm from "Components/CardFilm/CardFilm";
import SearchAppBar from "Components/SearchAppBar/SearchAppBar";
import { GetTrendingFilms, SearchFilmByName } from "Services/api";

export default function TrendingView() {
  const [movies, setMovies] = useState(null);
  const [filmName, setfilmName] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetTrendingFilms();
        if (response.status === 200) {
          setMovies(response.data.results);
        } else {
          throw new Error("Error - " + response.status);
        }
      } catch (error) {
        console.log("rejected   " + error.message);
        return null;
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (filmName === "") {
      return;
    }
    async function fetchData(filmName) {
      try {
        const response = await SearchFilmByName(filmName);
        if (response.status === 200) {
          console.log(response.data.results);
          setMovies(response.data.results);
        } else {
          throw new Error("Error - " + response.status);
        }
      } catch (error) {
        console.log("rejected   " + error.message);
        return null;
      }
    }
    fetchData(filmName);
  }, [filmName]);

  const handleSubmit = (movieName) => {
    setfilmName(movieName);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSubmit} />
      <div>
        {movies && (
          <Grid container spacing={2} sx={{ mt: "1rem" }}>
            {movies.map((movie) => (
              <CardFilm
                key={movie.id}
                movieId={movie.id}
                image={movie.poster_path}
                title={movie.title}
                genre={movie.genre_ids}
                date={movie.release_date}
              ></CardFilm>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}
