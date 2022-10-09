import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CardFilm from "Components/CardFilm/CardFilm";
import { GetTrendingFilms } from "Services/api";
import PaginationControlled from "Components/PaginationControlled/PaginationControlled";

export default function TrendingView() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetTrendingFilms(page);
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
    fetchData();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div>
        {movies && (
          <Grid container spacing={2} sx={{ mt: "5rem" }}>
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
        <PaginationControlled
          count={totalPages}
          onPage={handleChange}
          page={page}
        />
      </div>
    </>
  );
}
