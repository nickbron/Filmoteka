import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetFilmByID } from "../../Services/api";

export default function FilmDetailView() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetFilmByID(filmId);
        if (response.status === 200) {
          setFilm(response.data);
          console.log(response.data);
        } else {
          throw new Error("Error - " + response.status);
        }
      } catch (error) {
        console.log("rejected   " + error.message);
        return null;
      }
    }
    fetchData();
  }, [filmId]);

  return (
    <>
      <h1>FILM {filmId}</h1>
    </>
  );
}
