import React, { useEffect, useState } from 'react';
import styles from './movies.module.css';

const movies: React.FC = () => {
  function getMovies() {
    fetch('http://localhost:3333/api/movies/?type=movie')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      });
  }

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>Movies</h1>
        <span>({movies.length})</span>
      </header>
      <section>
        {movies.map((movie) => (
          <div key={movie.imdbID}>{movie.Title}</div>
        ))}
      </section>
    </>
  );
};

export default movies;
