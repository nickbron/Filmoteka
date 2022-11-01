import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CardFilm from "Components/CardFilm/CardFilm";
import SearchAppBar from "Components/SearchAppBar/SearchAppBar";
import { SearchFilmByName } from "Services/api";
import PaginationControlled from "Components/PaginationControlled/PaginationControlled";
import BtnScroll from "Components/BtnScroll/BtnScroll";
import useScrollPosition from "Hooks/useScrollPosition";

export default function SearchView() {
  const [movies, setMovies] = useState(null);
  const [filmName, setFilmName] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (filmName === "") {
      return;
    }
    async function fetchData(filmName) {
      try {
        const response = await SearchFilmByName(filmName, page);
        if (response.status === 200) {
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
        } else {
          throw new Error("Error - " + response.status);
        }
      } catch (error) {
        console.log("rejected   " + error.message);
        return null;
      }
    }
    fetchData(filmName);
  }, [filmName, page]);

  const handleSubmit = (movieName) => {
    setFilmName(movieName);
    setPage(1);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSubmit} />
      <Grid
        sx={
          {
            // height: "calc(100vh - 80px)",
            // height: "550px",
          }
        }
      >
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
            {scrollPosition > 500 && <BtnScroll />}
          </Grid>
        )}
        {movies && (
          <PaginationControlled
            count={totalPages}
            onPage={handleChange}
            page={page}
          />
        )}
      </Grid>
    </>
  );
}
