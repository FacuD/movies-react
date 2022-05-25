import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  return (
    <li className={styles.movieCard}>
      <Link to={`/movies/${movie.id}`}>
        <img loading="lazy"
          className={styles.movieImage}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.movieTitle}>{movie.title}</div>
      </Link>
    </li>
  );
}
