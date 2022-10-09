import { Grid } from "@mui/material";
import CardFilm from "Components/CardFilm/CardFilm";
import { useEffect, useState } from "react";
import { GetActorsByFilmId } from "Services/api";

export default function CardActors({ idFilm }) {
  const [actors, setActors] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetActorsByFilmId(idFilm);
        if (response.status === 200) {
          console.log("response", response);
          setActors(response.data.cast);
        } else {
          throw new Error("Error - " + response.status);
        }
      } catch (error) {
        console.log("rejected   " + error.message);
        return null;
      }
    }
    fetchData();
  }, [idFilm]);
  return (
    <>
      {actors && (
        <Grid container spacing={2} sx={{ mt: "1rem" }}>
          {actors.map((actor) => (
            <CardFilm
              key={actor.id}
              image={actor.profile_path}
              title={actor.name}
            ></CardFilm>
          ))}
        </Grid>
      )}
    </>
  );
}
