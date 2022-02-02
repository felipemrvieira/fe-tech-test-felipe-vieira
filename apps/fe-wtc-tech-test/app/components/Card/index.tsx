import React, { useEffect, useState } from 'react';
import styles from './cards.module.css';
import {
  VisibilityIcon,
  VisibilityOffIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  StarIcon,
  StarBorderIcon,
  StarHalfIcon,
  ExpandMoreIcon,
  ExpandLessIcon,
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
} from '@mono-nx-test-with-nextjs/ui';

interface Movie {
  Title: string;
  Poster: string;
}

const card: React.FC<Movie> = ({ Title, Poster }: Movie) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <VisibilityIcon />
        </div>
        <div className={styles.icon}>
          <FavoriteIcon />
        </div>
      </div>
      <img className={styles.poster} src={Poster} alt={Title} />
      <div className={styles.footer}>
        <div className={styles.rating}>(3.51)</div>
        <div className={styles.stars}>
          <StarBorderIcon fontSize="small" className={styles.star} />
          <StarBorderIcon fontSize="small" className={styles.star} />
          <StarBorderIcon fontSize="small" className={styles.star} />
          <StarBorderIcon fontSize="small" className={styles.star} />
          <StarBorderIcon fontSize="small" className={styles.star} />
        </div>
      </div>
    </div>
  );
};

export default card;
