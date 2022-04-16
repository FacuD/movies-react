import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const poster = movie.Poster;
  return (
    <li className={styles.movieCard}>
      <img className={styles.movieImage} src={poster} alt={movie.Title} />
      <div className={styles.movieTitle}>{movie.Title}</div>
    </li>
  );
}
