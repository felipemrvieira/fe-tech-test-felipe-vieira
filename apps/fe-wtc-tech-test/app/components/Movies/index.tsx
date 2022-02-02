import React, { useEffect, useState } from 'react';
import styles from './movies.module.css';
import Card from '../Card';

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
      <section className={styles.movies}>
        {movies.map((movie) => (
          <Card key={movie.imdbID} Title={movie.Title} Poster={movie.Poster} />
        ))}
      </section>
    </>
  );
};

export default movies;
