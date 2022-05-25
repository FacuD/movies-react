import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className={`${styles.container} ${styles.col}`}>
      <img loading="lazy"
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieInfo}`}>
        <p>Title: {movie.title}</p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>Description: {movie.overview}</p>
      </div>
    </div>
  );
}
