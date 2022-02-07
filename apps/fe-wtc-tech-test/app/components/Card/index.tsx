import React, { useMemo, useState } from 'react';
import styles from './cards.module.css';
import { calcRating } from '../../helpers';
import { Movie } from '../../Interfaces';

import {
  VisibilityIcon,
  VisibilityOffIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  StarIcon,
  StarBorderIcon,
  StarHalfIcon,
} from '@mono-nx-test-with-nextjs/ui';

const card: React.FC<Movie> = ({
  id,
  Title,
  Poster,
  Watched,
  Saved,
  Ratings,
}: Movie) => {
  const [watched, setWatched] = useState(Watched);
  const [saved, setSaved] = useState(Saved);

  const getCardColorClass = useMemo(() => {
    if (watched && saved) {
      return styles.cardWatchedAndSaved;
    }
    if (watched) {
      return styles.cardWatched;
    }
    if (saved) {
      return styles.cardSaved;
    }
    return styles.card;
  }, [watched, saved]);

  function handleWatchedClick() {
    setWatched(!watched);
    editMovie({ saved: saved, watched: !watched });
  }

  function handleSavedClick() {
    setSaved(!saved);
    editMovie({ saved: !saved, watched: watched });
  }

  function editMovie({ saved, watched }: { watched: boolean; saved: boolean }) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ watched: String(watched), saved: String(saved) }), // We send data in JSON format
    };

    fetch(`http://localhost:3333/api/movies/id/${id}`, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  const rating = calcRating(Ratings);

  function renderStars(rating: number) {
    const fullStars = rating.toString()[0];
    const HalfStars = rating.toString()[2];

    var stars = [
      ...Array(Number(fullStars)),
    ].map((value: undefined, index: number) => (
      <StarIcon fontSize="small" className={styles.star} key={index} />
    ));

    if (fullStars === '5') {
      return stars;
    }

    var random = Math.random();

    if (HalfStars >= '5') {
      stars.push(
        <StarHalfIcon
          fontSize="small"
          className={styles.star}
          key={Math.random()}
        />
      );
    } else {
      stars.push(
        <StarBorderIcon
          fontSize="small"
          className={styles.star}
          key={Math.random()}
        />
      );
    }
    for (var i = 0; i < 4 - Number(fullStars); i++)
      stars.push(
        <StarBorderIcon
          fontSize="small"
          className={styles.star}
          key={Math.random()}
        />
      );

    return stars;
  }

  return (
    <div className={styles.card + ` ${getCardColorClass}`}>
      <div className={styles.header}>
        <div className={styles.icon} onClick={handleWatchedClick}>
          {watched ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
        <div className={styles.icon} onClick={handleSavedClick}>
          {saved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
      <img className={styles.poster} src={Poster} alt={Title} />
      <div className={styles.footer}>
        <div className={styles.rating}>{rating}</div>
        <div className={styles.stars}>{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default card;
