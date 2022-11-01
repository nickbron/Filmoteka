import CardFilmDetails from "Components/CardFilmDetails/CardFilmDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetFilmByID } from "../../Services/api";

export default function FilmDetailView({ updateNumberFavFilms }) {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const [checked, setChecked] = useState(() => false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetFilmByID(filmId);
        if (response.status === 200) {
          setFilm(response.data);
        } else {
          throw new Error("Error - " + response.status);
        }
      } catch (error) {
        console.log("rejected   " + error.message);
        return null;
      }
    }
    fetchData();
    let arrFavourite = JSON.parse(localStorage.getItem("data")) ?? [];
    if (arrFavourite.indexOf(filmId) !== -1) setChecked(true);
  }, [filmId]);

  return (
    <>
      {film && (
        <CardFilmDetails
          idFilm={filmId}
          image={film.poster_path}
          title={film.original_title}
          vote={film.vote_average}
          votes={film.vote_count}
          popularity={film.popularity}
          genre={film.genres}
          overview={film.overview}
          date={film.release_date}
          fav={checked}
          runtime={film.runtime}
          backdrop={film.backdrop_path}
          updateNumberFavFilms={updateNumberFavFilms}
        ></CardFilmDetails>
      )}
    </>
  );
}
