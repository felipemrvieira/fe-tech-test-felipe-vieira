export interface Movie {
  Title: string;
  Poster: string;
  Watched: boolean;
  Saved: boolean;
  Ratings: Rating[];
}

export interface Rating {
  Source: string;
  Value: string;
}
