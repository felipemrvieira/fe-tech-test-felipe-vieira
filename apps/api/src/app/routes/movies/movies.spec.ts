import * as request from 'supertest';
import { app, server, mapOfMovies } from '../../../main';
import {
  MOVIES_ROUTE,
  MOVIE_BY_ID_ROUTE,
  MOVIE_BY_NAME_ROUTE,
  MOVIES_TITLES,
  MOVIES_IDS,
  METASCORE,
} from '@mono-nx-test-with-nextjs/api/constants';
import { LOWER_CASE_TRUE, LOWER_CASE_FALSE } from '.';
import {
  MOVIE_TYPE,
  SERIES_TYPE,
  FIRST_LETTER_UPPERCASE_TRUE,
  FIRST_LETTER_UPPERCASE_FALSE,
} from '@mono-nx-test-with-nextjs/api/assets';

const movieId = 'tt0083658';
const getMovieByName = `${MOVIE_BY_NAME_ROUTE}/Blade Runner`;
const getMovieById = `${MOVIE_BY_ID_ROUTE}/${movieId}`;
const putMovie = `${MOVIE_BY_ID_ROUTE}/${movieId}`;

const listOfMovies = mapOfMovies.get(MOVIES_TITLES);
const listOfIds = mapOfMovies.get(MOVIES_IDS);
const movieTitle = listOfIds.get(movieId);
const getMovie = () => listOfMovies.get(movieTitle);

const totalNumberOfMovies = listOfIds.size; // 22
const validYear = '1982';
const validYear2 = '1989';
const validActorName = 'Harrison Ford';
const validGenreName = 'Action';
const validDirectorName = 'Akira Kurosawa';
const validWatched = LOWER_CASE_TRUE;
const validSaved = LOWER_CASE_FALSE;

const isEveryElements = (arr, propertyName, propertyValue, callback = null) =>
  arr.every((element) =>
    callback
      ? callback(element[propertyName])
      : element[propertyName] === propertyValue
  );

describe(`get routes:`, () => {
  afterEach(async () => {
    await server.close();
  });

  describe(`get ${MOVIES_ROUTE}`, () => {
    it(`should get the full movies list`, async () => {
      const res = await request(app).get(MOVIES_ROUTE);
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toEqual(totalNumberOfMovies);
      expect(res.body).toMatchInlineSnapshot(`
          Array [
            Object {
              "Actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
              "Awards": "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "27 Aug 1997",
              "Director": "Ridley Scott",
              "Genre": "Action, Sci-Fi, Thriller",
              "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic",
              "Metascore": "84",
              "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
              "Production": "Warner Bros. Pictures",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.1/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "90%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "84/100",
                },
              ],
              "Released": "25 Jun 1982",
              "Runtime": "117 min",
              "Saved": "False",
              "Title": "Blade Runner",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)",
              "Year": "1982",
              "imdbID": "tt0083658",
              "imdbRating": "8.1",
              "imdbVotes": "663,604",
            },
            Object {
              "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
              "Awards": "Won 5 Oscars. Another 54 wins & 104 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA, UK, Malta, Morocco",
              "DVD": "N/A",
              "Director": "Ridley Scott",
              "Genre": "Action, Adventure, Drama",
              "Language": "English",
              "Metascore": "67",
              "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
              "Production": "N/A",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.5/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "77%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "67/100",
                },
              ],
              "Released": "05 May 2000",
              "Runtime": "155 min",
              "Saved": "False",
              "Title": "Gladiator",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "David Franzoni (story), David Franzoni (screenplay), John Logan (screenplay), William Nicholson (screenplay)",
              "Year": "2000",
              "imdbID": "tt0172495",
              "imdbRating": "8.5",
              "imdbVotes": "1,281,029",
            },
            Object {
              "Actors": "Toshir?? Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
              "Awards": "Nominated for 2 Oscars. Another 5 wins & 6 nominations.",
              "BoxOffice": "N/A",
              "Country": "Japan",
              "DVD": "01 Mar 1999",
              "Director": "Akira Kurosawa",
              "Genre": "Action, Adventure, Drama",
              "Language": "Japanese",
              "Metascore": "98",
              "Plot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjI1ZjhmMzktMDZhMy00MDhjLTk3YjAtMTNlZTA5MDI3NzQ3XkEyXkFqcGdeQXVyODkxNzAwMDI@._V1_SX300.jpg",
              "Production": "Columbia Pictures",
              "Rated": "Not Rated",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.6/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "100%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "98/100",
                },
              ],
              "Released": "19 Nov 1956",
              "Runtime": "207 min",
              "Saved": "False",
              "Title": "Seven Samurai",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Akira Kurosawa (screenplay), Shinobu Hashimoto (screenplay), Hideo Oguni (screenplay)",
              "Year": "1954",
              "imdbID": "tt0047478",
              "imdbRating": "8.6",
              "imdbVotes": "301,458",
            },
            Object {
              "Actors": "Brent Butt, Dana Gould, Kevin Rooney, Eric Tunney",
              "Awards": "N/A",
              "Country": "Canada",
              "Director": "N/A",
              "Genre": "N/A",
              "Language": "English",
              "Metascore": "N/A",
              "Plot": "N/A",
              "Poster": "https://m.media-amazon.com/images/M/MV5BM2U1ZjQ0ZmItNGE3Mi00MmIyLTk3YWQtNmZlMTQwNTVlZTViXkEyXkFqcGdeQXVyMTkwNDA0OA@@._V1_SX300.jpg",
              "Rated": "N/A",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "5.5/10",
                },
              ],
              "Released": "01 Jul 1995",
              "Runtime": "30 min",
              "Saved": "True",
              "Title": "Get Serious: Seven Deadly Sins",
              "Type": "series",
              "Watched": "False",
              "Writer": "Michael French",
              "Year": "1995",
              "imdbID": "tt0346278",
              "imdbRating": "5.5",
              "imdbVotes": "13",
              "totalSeasons": "3",
            },
            Object {
              "Actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
              "Awards": "Won 1 Oscar. Another 68 wins & 74 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "19 May 1998",
              "Director": "Quentin Tarantino",
              "Genre": "Crime, Drama",
              "Language": "English, Spanish, French",
              "Metascore": "94",
              "Plot": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
              "Production": "Miramax Films",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.9/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "92%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "94/100",
                },
              ],
              "Released": "14 Oct 1994",
              "Runtime": "154 min",
              "Saved": "True",
              "Title": "Pulp Fiction",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino",
              "Year": "1994",
              "imdbID": "tt0110912",
              "imdbRating": "8.9",
              "imdbVotes": "1,744,145",
            },
            Object {
              "Actors": "Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah",
              "Awards": "Nominated for 1 Golden Globe. Another 28 wins & 101 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA, Japan",
              "DVD": "N/A",
              "Director": "Quentin Tarantino",
              "Genre": "Action, Crime, Thriller",
              "Language": "English, Japanese, French",
              "Metascore": "69",
              "Plot": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
              "Production": "N/A",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.1/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "85%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "69/100",
                },
              ],
              "Released": "10 Oct 2003",
              "Runtime": "111 min",
              "Saved": "False",
              "Title": "Kill Bill: Vol. 1",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Quentin Tarantino, Quentin Tarantino (character The Bride), Uma Thurman (character The Bride)",
              "Year": "2003",
              "imdbID": "tt0266697",
              "imdbRating": "8.1",
              "imdbVotes": "961,349",
            },
            Object {
              "Actors": "Vivica A. Fox, Ambrosia Kelley, Michael Parks, James Parks",
              "Awards": "Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "N/A",
              "Director": "Quentin Tarantino",
              "Genre": "Action, Crime, Thriller",
              "Language": "English, Cantonese, Mandarin, Spanish",
              "Metascore": "83",
              "Plot": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
              "Production": "N/A",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.0/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "84%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "83/100",
                },
              ],
              "Released": "16 Apr 2004",
              "Runtime": "137 min",
              "Saved": "False",
              "Title": "Kill Bill: Vol. 2",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Quentin Tarantino, Quentin Tarantino (character The Bride), Uma Thurman (character The Bride)",
              "Year": "2004",
              "imdbID": "tt0378194",
              "imdbRating": "8.0",
              "imdbVotes": "657,553",
            },
            Object {
              "Actors": "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
              "Awards": "Won 5 Oscars. Another 63 wins & 51 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "01 Jul 1998",
              "Director": "Jonathan Demme",
              "Genre": "Crime, Drama, Thriller",
              "Language": "English, Latin",
              "Metascore": "85",
              "Plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
              "Production": "Orion Pictures Corporation",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.6/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "96%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "85/100",
                },
              ],
              "Released": "14 Feb 1991",
              "Runtime": "118 min",
              "Saved": "False",
              "Title": "The Silence of the Lambs",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Thomas Harris (novel), Ted Tally (screenplay)",
              "Year": "1991",
              "imdbID": "tt0102926",
              "imdbRating": "8.6",
              "imdbVotes": "1,205,175",
            },
            Object {
              "Actors": "Matt Damon, Danny DeVito, Claire Danes, Jon Voight",
              "Awards": "Nominated for 1 Golden Globe. Another 2 wins & 9 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA, Germany",
              "DVD": "N/A",
              "Director": "Francis Ford Coppola",
              "Genre": "Crime, Drama, Thriller",
              "Language": "English",
              "Metascore": "72",
              "Plot": "An underdog lawyer takes on a fraudulent insurance company.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjdlMjI2ZjgtN2ViOS00ZmI0LWE0ZTMtZjg1ZjczYWYzOGZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
              "Production": "N/A",
              "Rated": "PG-13",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "7.2/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "83%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "72/100",
                },
              ],
              "Released": "21 Nov 1997",
              "Runtime": "135 min",
              "Saved": "False",
              "Title": "The Rainmaker",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "John Grisham (novel), Francis Ford Coppola (screenplay), Michael Herr (narration)",
              "Year": "1997",
              "imdbID": "tt0119978",
              "imdbRating": "7.2",
              "imdbVotes": "60,219",
            },
            Object {
              "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
              "Awards": "Won 3 Oscars. Another 26 wins & 30 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "09 Oct 2001",
              "Director": "Francis Ford Coppola",
              "Genre": "Crime, Drama",
              "Language": "English, Italian, Latin",
              "Metascore": "100",
              "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
              "Production": "Paramount Pictures",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "9.2/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "98%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "100/100",
                },
              ],
              "Released": "24 Mar 1972",
              "Runtime": "175 min",
              "Saved": "True",
              "Title": "The Godfather",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
              "Year": "1972",
              "imdbID": "tt0068646",
              "imdbRating": "9.2",
              "imdbVotes": "1,532,092",
            },
            Object {
              "Actors": "Antonio Banderas, Elena Anaya, Marisa Paredes, Jan Cornet",
              "Awards": "Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.",
              "BoxOffice": "$3,185,193",
              "Country": "Spain",
              "DVD": "06 Mar 2012",
              "Director": "Pedro Almod??var",
              "Genre": "Drama, Horror, Thriller",
              "Language": "Spanish",
              "Metascore": "70",
              "Plot": "A brilliant plastic surgeon, haunted by past tragedies, creates a type of synthetic skin that withstands any kind of damage. His guinea pig: a mysterious and volatile woman who holds the key to his obsession.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BYmFmNjY5NDYtZjlhNi00YjQ5LTgzNzctNWRiNWUzNmIyNjc4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
              "Production": "Sony Pictures Classics",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "7.6/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "81%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "70/100",
                },
              ],
              "Released": "02 Sep 2011",
              "Runtime": "120 min",
              "Saved": "False",
              "Title": "The Skin I Live In",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Thierry Jonquet (novel), Pedro Almod??var, Agust??n Almod??var (collaboration)",
              "Year": "2011",
              "imdbID": "tt1189073",
              "imdbRating": "7.6",
              "imdbVotes": "130,820",
            },
            Object {
              "Actors": "Pen??lope Cruz, Carmen Maura, Lola Due??as, Blanca Portillo",
              "Awards": "Nominated for 1 Oscar. Another 61 wins & 92 nominations.",
              "BoxOffice": "$12,830,604",
              "Country": "Spain",
              "DVD": "03 Apr 2007",
              "Director": "Pedro Almod??var",
              "Genre": "Comedy, Drama",
              "Language": "Spanish",
              "Metascore": "84",
              "Plot": "After her death, a mother returns to her home town in order to fix the situations she couldn't resolve during her life.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0NTUxMjY1OV5BMl5BanBnXkFtZTcwNjI2OTMzMQ@@._V1_SX300.jpg",
              "Production": "Sony Pictures Classics",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "7.6/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "91%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "84/100",
                },
              ],
              "Released": "26 Jan 2007",
              "Runtime": "121 min",
              "Saved": "True",
              "Title": "Volver",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Pedro Almod??var (screenplay)",
              "Year": "2006",
              "imdbID": "tt0441909",
              "imdbRating": "7.6",
              "imdbVotes": "91,900",
            },
            Object {
              "Actors": "Thomas Mitchell, Barbara O'Neil, Vivien Leigh, Evelyn Keyes",
              "Awards": "Won 8 Oscars. Another 12 wins & 12 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "07 Mar 2000",
              "Director": "Victor Fleming, George Cukor, Sam Wood",
              "Genre": "Drama, History, Romance, War",
              "Language": "English",
              "Metascore": "97",
              "Plot": "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
              "Production": "Loew's Inc.",
              "Rated": "Passed",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.1/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "91%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "97/100",
                },
              ],
              "Released": "17 Jan 1940",
              "Runtime": "238 min",
              "Saved": "True",
              "Title": "Gone with the Wind",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Margaret Mitchell (story of the old south \\"Gone with the Wind\\"), Sidney Howard (screenplay)",
              "Year": "1939",
              "imdbID": "tt0031381",
              "imdbRating": "8.1",
              "imdbVotes": "276,652",
            },
            Object {
              "Actors": "Marilyn Monroe, Tony Curtis, Jack Lemmon, George Raft",
              "Awards": "Won 1 Oscar. Another 14 wins & 15 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "22 May 2001",
              "Director": "Billy Wilder",
              "Genre": "Comedy, Music, Romance",
              "Language": "English",
              "Metascore": "98",
              "Plot": "After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
              "Production": "United Artists",
              "Rated": "Not Rated",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.2/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "95%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "98/100",
                },
              ],
              "Released": "19 Mar 1959",
              "Runtime": "121 min",
              "Saved": "False",
              "Title": "Some Like It Hot",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Billy Wilder (screenplay), I.A.L. Diamond (screenplay), Robert Thoeren (suggested by a story by), Michael Logan (suggested by a story by)",
              "Year": "1959",
              "imdbID": "tt0053291",
              "imdbRating": "8.2",
              "imdbVotes": "233,258",
            },
            Object {
              "Actors": "Harrison Ford, Sean Connery, Denholm Elliott, Alison Doody",
              "Awards": "Won 1 Oscar. Another 7 wins & 22 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "21 Oct 2003",
              "Director": "Steven Spielberg",
              "Genre": "Action, Adventure",
              "Language": "English, German, Greek, Arabic",
              "Metascore": "65",
              "Plot": "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry \\"Indiana\\" Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its powers.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
              "Production": "Paramount Pictures",
              "Rated": "PG-13",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.2/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "88%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "65/100",
                },
              ],
              "Released": "24 May 1989",
              "Runtime": "127 min",
              "Saved": "False",
              "Title": "Indiana Jones and the Last Crusade",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Jeffrey Boam (screenplay), George Lucas (story), Menno Meyjes (story), George Lucas (characters), Philip Kaufman (characters)",
              "Year": "1989",
              "imdbID": "tt0097576",
              "imdbRating": "8.2",
              "imdbVotes": "664,861",
            },
            Object {
              "Actors": "Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold",
              "Awards": "Won 2 Oscars. Another 97 wins & 159 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA, UK, Hungary, Canada, Spain",
              "DVD": "N/A",
              "Director": "Denis Villeneuve",
              "Genre": "Action, Drama, Mystery, Sci-Fi, Thriller",
              "Language": "English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish",
              "Metascore": "81",
              "Plot": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
              "Production": "N/A",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.0/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "87%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "81/100",
                },
              ],
              "Released": "06 Oct 2017",
              "Runtime": "164 min",
              "Saved": "False",
              "Title": "Blade Runner 2049",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Hampton Fancher (screenplay by), Michael Green (screenplay by), Hampton Fancher (story by), Philip K. Dick (based on characters from the novel \\"Do Androids Dream of Electric Sheep?\\" by)",
              "Year": "2017",
              "imdbID": "tt1856101",
              "imdbRating": "8.0",
              "imdbVotes": "429,166",
            },
            Object {
              "Actors": "Adam Sandler, Drew Barrymore, Rob Schneider, Sean Astin",
              "Awards": "6 wins & 10 nominations.",
              "BoxOffice": "$120,776,832",
              "Country": "USA",
              "DVD": "15 Jun 2004",
              "Director": "Peter Segal",
              "Genre": "Comedy, Drama, Romance",
              "Language": "English, Hawaiian, Mandarin, None",
              "Metascore": "48",
              "Plot": "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams, until he discovers she has short-term memory loss and forgets him the next day.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_SX300.jpg",
              "Production": "Sony Pictures",
              "Rated": "PG-13",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "6.8/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "45%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "48/100",
                },
              ],
              "Released": "13 Feb 2004",
              "Runtime": "99 min",
              "Saved": "True",
              "Title": "50 First Dates",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "George Wing",
              "Year": "2004",
              "imdbID": "tt0343660",
              "imdbRating": "6.8",
              "imdbVotes": "316,552",
            },
            Object {
              "Actors": "Adam Sandler, Jennifer Aniston, Nicole Kidman, Nick Swardson",
              "Awards": "5 wins & 13 nominations.",
              "BoxOffice": "$103,028,109",
              "Country": "USA",
              "DVD": "07 Jun 2011",
              "Director": "Dennis Dugan",
              "Genre": "Comedy, Romance",
              "Language": "English",
              "Metascore": "33",
              "Plot": "On a weekend trip to Hawaii, a plastic surgeon convinces his loyal assistant to pose as his soon-to-be-divorced wife in order to cover up a careless lie he told to his much-younger girlfriend.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA@@._V1_SX300.jpg",
              "Production": "Sony Pictures",
              "Rated": "PG-13",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "6.4/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "19%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "33/100",
                },
              ],
              "Released": "11 Feb 2011",
              "Runtime": "117 min",
              "Saved": "False",
              "Title": "Just Go with It",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Allan Loeb (screenplay), Timothy Dowling (screenplay), I.A.L. Diamond (screenplay \\"Cactus Flower\\"), Abe Burrows (stage play), Pierre Barillet (French play), Jean-Pierre Gr??dy (French play)",
              "Year": "2011",
              "imdbID": "tt1564367",
              "imdbRating": "6.4",
              "imdbVotes": "211,733",
            },
            Object {
              "Actors": "Antonio Banderas, Pen??lope Cruz, Cot?? Soler, Antonio de la Torre",
              "Awards": "3 wins & 10 nominations.",
              "BoxOffice": "$1,367,846",
              "Country": "Spain",
              "DVD": "03 Sep 2013",
              "Director": "Pedro Almod??var",
              "Genre": "Comedy",
              "Language": "Spanish",
              "Metascore": "55",
              "Plot": "When it appears as though the end is in sight, the pilots, flight crew, and passengers of a plane heading to Mexico City look to forget the anguish of the moment and face the greatest danger, which we carry within ourselves.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxODgwNDQyOF5BMl5BanBnXkFtZTcwMzM2NjkwOQ@@._V1_SX300.jpg",
              "Production": "Sony Pictures Classics",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "5.6/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "49%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "55/100",
                },
              ],
              "Released": "08 Mar 2013",
              "Runtime": "90 min",
              "Saved": "False",
              "Title": "I'm So Excited!",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Pedro Almod??var",
              "Year": "2013",
              "imdbID": "tt2243389",
              "imdbRating": "5.6",
              "imdbVotes": "21,084",
            },
            Object {
              "Actors": "Eusebio Poncela, Carmen Maura, Antonio Banderas, Miguel Molina",
              "Awards": "12 wins & 5 nominations.",
              "BoxOffice": "N/A",
              "Country": "Spain",
              "DVD": "N/A",
              "Director": "Pedro Almod??var",
              "Genre": "Comedy, Drama, Thriller",
              "Language": "Spanish",
              "Metascore": "N/A",
              "Plot": "A film maker has a fling with a homicidal possessive fan who threatens his true love and sister.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMDdjZDhlOWUtOWQ4YS00ZjdhLWJkOTktMTVlYTY2Y2IwMTMxXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg",
              "Production": "N/A",
              "Rated": "NC-17",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "7.1/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "100%",
                },
              ],
              "Released": "05 Mar 1987",
              "Runtime": "102 min",
              "Saved": "False",
              "Title": "Law of Desire",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Pedro Almod??var (screenplay), Pedro Almod??var (story)",
              "Year": "1987",
              "imdbID": "tt0093412",
              "imdbRating": "7.1",
              "imdbVotes": "10,130",
            },
            Object {
              "Actors": "Carmen Maura, Antonio Banderas, Julieta Serrano, Mar??a Barranco",
              "Awards": "Nominated for 1 Oscar. Another 22 wins & 22 nominations.",
              "BoxOffice": "N/A",
              "Country": "Spain",
              "DVD": "10 Apr 2001",
              "Director": "Pedro Almod??var",
              "Genre": "Comedy, Drama",
              "Language": "Spanish",
              "Metascore": "85",
              "Plot": "A television actress encounters a variety of eccentric characters after embarking on a journey to discover why her lover abruptly left her.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BYWM1NWFjMDItODg5OS00MWUwLWFjNWUtOGZkZWM3NmRiMWNjXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
              "Production": "Orion Classics",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "7.6/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "89%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "85/100",
                },
              ],
              "Released": "11 Nov 1988",
              "Runtime": "88 min",
              "Saved": "False",
              "Title": "Women on the Verge of a Nervous Breakdown",
              "Type": "movie",
              "Watched": "False",
              "Website": "N/A",
              "Writer": "Pedro Almod??var (screenplay)",
              "Year": "1988",
              "imdbID": "tt0095675",
              "imdbRating": "7.6",
              "imdbVotes": "33,622",
            },
            Object {
              "Actors": "Victoria Abril, Antonio Banderas, Loles Le??n, Mar??a Barranco",
              "Awards": "8 wins & 19 nominations.",
              "BoxOffice": "N/A",
              "Country": "Spain",
              "DVD": "12 Dec 2000",
              "Director": "Pedro Almod??var",
              "Genre": "Comedy, Crime, Drama, Romance",
              "Language": "Spanish",
              "Metascore": "55",
              "Plot": "An unbalanced but alluring former mental patient takes a porn star prisoner in the hopes of convincing her to marry him.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMDM0OTItY2E1YS00N2Y4LWFlNGMtOTgyNmFlMjIyOTgxXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
              "Production": "Miramax",
              "Rated": "NC-17",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "7.0/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "70%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "55/100",
                },
              ],
              "Released": "22 Jan 1990",
              "Runtime": "101 min",
              "Saved": "False",
              "Title": "Tie Me Up! Tie Me Down!",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Pedro Almod??var (screenplay), Pedro Almod??var (story)",
              "Year": "1989",
              "imdbID": "tt0101026",
              "imdbRating": "7.0",
              "imdbVotes": "23,039",
            },
          ]
        `);
    });

    describe('&type=', () => {
      it(`should return all movies of &type=${MOVIE_TYPE}`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?type=${MOVIE_TYPE}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(21);
        expect(isEveryElements(res.body, 'Type', MOVIE_TYPE)).toEqual(true);
      });

      it(`should return all movies of &type=${SERIES_TYPE}`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?type=${SERIES_TYPE}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        expect(isEveryElements(res.body, 'Type', SERIES_TYPE)).toEqual(true);
      });

      it(`should return all types: movies and series if &type=${SERIES_TYPE},${MOVIE_TYPE}`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?type=${SERIES_TYPE},${MOVIE_TYPE}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(totalNumberOfMovies);
      });

      it(`should return full list of movies when &type=wrongOne`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?type=wrongType`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(totalNumberOfMovies);
      });
    });

    describe('&year=', () => {
      it(`should return correct result when &year=validYear`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?year=${validYear}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        expect(isEveryElements(res.body, 'Year', validYear)).toEqual(true);
      });

      it(`should return correct result when &year=validYear1,validYear2 (multiple)`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?year=${validYear},${validYear2}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
        expect(
          isEveryElements(res.body, 'Year', null, (currentMovieYearValue) =>
            [validYear, validYear2].includes(currentMovieYearValue)
          )
        ).toEqual(true);
      });

      it(`should return full list when &year=wrongOne`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?year=wrongType`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(0);
      });
    });

    describe('&metascore=', () => {
      Object.entries(METASCORE).forEach(([key, value]) => {
        it(`should return all movies of &metascore=${key} (${value.label})`, async () => {
          const res = await request(app).get(
            `${MOVIES_ROUTE}?metascore=${key}`
          );
          expect(res.statusCode).toEqual(200);
          expect(
            isEveryElements(
              res.body,
              'Metascore',
              null,
              (currentMovieMetascoreValue) =>
                value.logic(currentMovieMetascoreValue)
            )
          ).toEqual(true);
        });
      });

      it(`should return all movies when multiple metascore are used: Combination 1`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?metascore=0,1`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(9);
      });

      it(`should return all movies when multiple metascore are used: Combination 2`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?metascore=0,1,2,3`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(20);
      });

      it(`should return all movies when multiple metascore are used: Combination 3 (with N/A)`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?metascore=0,1,2,3,4`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(22);
      });

      it(`should return full list when &metascore=wrongOne`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?metascore=wrongOne`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(totalNumberOfMovies);
      });
    });

    describe('&actor=', () => {
      it(`should return correct result when &actor=validActorName`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?actor=${validActorName}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
        expect(
          isEveryElements(res.body, 'Actors', null, (currentMovieActorsList) =>
            currentMovieActorsList.includes(`${validActorName}`)
          )
        ).toEqual(true);
      });

      it(`should return correct result when &actor=validActorName1, validActorName2, validActorName3 (multiple)`, async () => {
        const listOfActors = `${validActorName}, Michael Parks, Rutger Hauer`;
        const res = await request(app).get(
          `${MOVIES_ROUTE}?actor=${listOfActors}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
        expect(
          isEveryElements(
            res.body,
            'Actors',
            null,
            (currentMovieActorsList) => {
              return currentMovieActorsList
                .split(',')
                .some((actor) => listOfActors.indexOf(actor.trim()) !== -1);
            }
          )
        ).toEqual(true);
      });

      it(`should return empty array when &actor=wrongOne`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?actor=wrongName`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(0);
        expect(res.body).toEqual([]);
      });
    });

    describe('&director=', () => {
      it(`should return correct result when &director=validDirectorName1, validDirectorName2`, async () => {
        const listOfDirectors = `${validDirectorName}, Quentin Tarantino `;
        const res = await request(app).get(
          `${MOVIES_ROUTE}?director=${listOfDirectors}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(4);
        expect(
          isEveryElements(
            res.body,
            'Director',
            null,
            (currentMovieDirectorsList) => {
              return currentMovieDirectorsList
                .split(',')
                .some(
                  (director) => listOfDirectors.indexOf(director.trim()) !== -1
                );
            }
          )
        ).toEqual(true);
      });

      it(`should return empty array when &director=wrongOne`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?director=wrongName`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(0);
        expect(res.body).toEqual([]);
      });
    });

    describe('&genre=', () => {
      it(`should return correct result when &genre=${validGenreName}`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?genre=${validGenreName}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(7);
        expect(
          isEveryElements(res.body, 'Genre', null, (currentMovieGenreList) =>
            currentMovieGenreList.includes(`${validGenreName}`)
          )
        ).toEqual(true);
      });

      it(`should return correct result when &genre=validGenreName1, validGenreName2 (multiple)`, async () => {
        const genres = `${validGenreName}, Thriller`;
        const res = await request(app).get(`${MOVIES_ROUTE}?genre=${genres}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(11);
        expect(
          isEveryElements(res.body, 'Genre', null, (currentMovieGenreList) =>
            currentMovieGenreList
              .split(',')
              .some((genre) => genres.indexOf(genre))
          )
        ).toEqual(true);
      });

      it(`should return empty array when &genre=wrongOne`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?genre=wrongName`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(0);
        expect(res.body).toEqual([]);
      });
    });

    describe('&watched=', () => {
      it(`should return correct result when &watched=${validWatched}`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?watched=${validWatched}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(11);
        expect(
          isEveryElements(res.body, 'Watched', FIRST_LETTER_UPPERCASE_TRUE)
        ).toEqual(true);
      });

      it(`should return full list when &watched=wrongOne`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?watched=wrongName`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(22);
      });
    });

    describe('&saved=', () => {
      it(`should return correct result when &saved=${validSaved}`, async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?saved=${validSaved}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(16);
        expect(
          isEveryElements(res.body, 'Saved', FIRST_LETTER_UPPERCASE_FALSE)
        ).toEqual(true);
      });

      it(`should return full list when &saved=wrongOne`, async () => {
        const res = await request(app).get(`${MOVIES_ROUTE}?saved=wrongName`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(totalNumberOfMovies);
      });
    });

    describe('Concatenation of filters (AND)', () => {
      const correctDirector = `Ridley Scott`;
      const metascoreValue = '2';
      // There are no movies with these values and Akira Kurosawa as Director. The correct director is Ridley Scott
      const invalidCombinationOfFilters = `year=${validYear}&type=${MOVIE_TYPE}&actor=${validActorName}&director=${validDirectorName}&metascore=${metascoreValue}&genre=${validGenreName}&watched=${validWatched}&saved=${validSaved}`;
      // This combination of filters as Ridley Scott as director
      const validCombinationOfFilters = `year=${validYear}&type=${MOVIE_TYPE}&actor=${validActorName}&director=${correctDirector}&metascore=${metascoreValue}&genre=${validGenreName}&watched=${validWatched}&saved=${validSaved}`;

      it('should return empty array when at least one filter has not valid value', async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?${invalidCombinationOfFilters}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(0);
        expect(res.body).toEqual([]);
      });

      it('should return correct result when all the filters have valid values', async () => {
        const res = await request(app).get(
          `${MOVIES_ROUTE}?${validCombinationOfFilters}`
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        expect(isEveryElements(res.body, 'Type', MOVIE_TYPE)).toEqual(true);
        expect(isEveryElements(res.body, 'Year', validYear)).toEqual(true);
        expect(
          isEveryElements(res.body, 'Actors', null, (currentMovieActorsList) =>
            currentMovieActorsList.includes(validActorName)
          )
        ).toEqual(true);
        expect(
          isEveryElements(
            res.body,
            'Director',
            null,
            (currentMovieActorsList) =>
              currentMovieActorsList.includes(correctDirector)
          )
        ).toEqual(true);
        expect(
          isEveryElements(
            res.body,
            'Metascore',
            null,
            (currentMovieMetascoreValue) =>
              METASCORE[metascoreValue].logic(currentMovieMetascoreValue)
          )
        ).toEqual(true);
        expect(
          isEveryElements(res.body, 'Genre', null, (currentMovieGenreList) =>
            currentMovieGenreList.includes(validGenreName)
          )
        ).toEqual(true);
        expect(
          isEveryElements(res.body, 'Watched', FIRST_LETTER_UPPERCASE_TRUE)
        ).toEqual(true);
        expect(
          isEveryElements(res.body, 'Saved', FIRST_LETTER_UPPERCASE_FALSE)
        ).toEqual(true);
      });
    });
  });

  describe(`get ${MOVIE_BY_NAME_ROUTE}/:name`, () => {
    it(`should get the movie by its name`, async () => {
      const res = await request(app).get(`${getMovieByName}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toMatchInlineSnapshot(`
          Array [
            Object {
              "Actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
              "Awards": "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "27 Aug 1997",
              "Director": "Ridley Scott",
              "Genre": "Action, Sci-Fi, Thriller",
              "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic",
              "Metascore": "84",
              "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
              "Production": "Warner Bros. Pictures",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.1/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "90%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "84/100",
                },
              ],
              "Released": "25 Jun 1982",
              "Runtime": "117 min",
              "Saved": "False",
              "Title": "Blade Runner",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)",
              "Year": "1982",
              "imdbID": "tt0083658",
              "imdbRating": "8.1",
              "imdbVotes": "663,604",
            },
          ]
        `);
    });
    it(`should return empty array if the name doesn't exist`, async () => {
      const res = await request(app).get(`${MOVIE_BY_NAME_ROUTE}/wrongName`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toEqual(0);
      expect(res.body).toEqual([]);
    });
  });

  describe(`get ${MOVIE_BY_ID_ROUTE}/:id`, () => {
    it(`should get the movie by its ID`, async () => {
      const res = await request(app).get(getMovieById);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toMatchInlineSnapshot(`
          Array [
            Object {
              "Actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
              "Awards": "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
              "BoxOffice": "N/A",
              "Country": "USA",
              "DVD": "27 Aug 1997",
              "Director": "Ridley Scott",
              "Genre": "Action, Sci-Fi, Thriller",
              "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic",
              "Metascore": "84",
              "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
              "Production": "Warner Bros. Pictures",
              "Rated": "R",
              "Ratings": Array [
                Object {
                  "Source": "Internet Movie Database",
                  "Value": "8.1/10",
                },
                Object {
                  "Source": "Rotten Tomatoes",
                  "Value": "90%",
                },
                Object {
                  "Source": "Metacritic",
                  "Value": "84/100",
                },
              ],
              "Released": "25 Jun 1982",
              "Runtime": "117 min",
              "Saved": "False",
              "Title": "Blade Runner",
              "Type": "movie",
              "Watched": "True",
              "Website": "N/A",
              "Writer": "Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)",
              "Year": "1982",
              "imdbID": "tt0083658",
              "imdbRating": "8.1",
              "imdbVotes": "663,604",
            },
          ]
        `);
    });

    it(`should return empty array if the ID doesn't exist`, async () => {
      const res = await request(app).get(`${MOVIE_BY_ID_ROUTE}/wrongid123`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([]);
    });
  });
});

describe(`put route: ${MOVIES_ROUTE}/:id`, () => {
  it(`should update "saved" property`, async () => {
    const movieBeforeUpdate = getMovie();
    expect(movieBeforeUpdate.Saved).toEqual('False');

    const res = await request(app)
      .put(putMovie)
      .send({ saved: LOWER_CASE_TRUE });
    expect(res.statusCode).toEqual(200);

    const movieAfterUpdate = getMovie();
    expect(movieAfterUpdate.Saved).toEqual('True');

    const res2 = await request(app)
      .put(putMovie)
      .send({ saved: LOWER_CASE_FALSE });
    expect(res2.statusCode).toEqual(200);

    const movieAfterFalseUpdate = getMovie();
    expect(movieAfterFalseUpdate.Saved).toEqual('False');
  });

  it(`should return 412 is the value of the "saved" property is wrong`, async () => {
    const res = await request(app).put(putMovie).send({ saved: 'TRUE' });
    expect(res.statusCode).toEqual(412);
  });

  it(`should respond with 412 if preconditioned failed (wrong property name)`, async () => {
    const res = await request(app).put(putMovie).send({ wrong: 'true' });
    expect(res.statusCode).toEqual(412);
    expect(res.body).toEqual({});
  });

  it('should return 412 is the movie Id is wrong but "saved" property is OK', async () => {
    const res = await request(app)
      .put(`${MOVIE_BY_ID_ROUTE}/wrongId`)
      .send({ saved: 'true' });
    expect(res.statusCode).toEqual(412);
    expect(res.body).toEqual({});
  });

  it('should return 412 is the movie Id is wrong but "watched" property is OK', async () => {
    const res = await request(app)
      .put(`${MOVIE_BY_ID_ROUTE}/wrongId`)
      .send({ watched: 'true' });
    expect(res.statusCode).toEqual(412);
    expect(res.body).toEqual({});
  });

  it(`should update "watched" property`, async () => {
    const movieBeforeUpdate = getMovie();
    expect(movieBeforeUpdate.Watched).toEqual('True');

    const res = await request(app)
      .put(putMovie)
      .send({ watched: LOWER_CASE_FALSE });
    expect(res.statusCode).toEqual(200);

    const movieAfterUpdate = getMovie();
    expect(movieAfterUpdate.Watched).toEqual('False');

    const res2 = await request(app)
      .put(putMovie)
      .send({ watched: LOWER_CASE_TRUE });
    expect(res2.statusCode).toEqual(200);

    const movieAfterFalseUpdate = getMovie();
    expect(movieAfterFalseUpdate.Watched).toEqual('True');
  });

  it('should update "watched" and "saved" property', async () => {
    const movieBeforeUpdate = getMovie();
    expect(movieBeforeUpdate.Watched).toEqual('True');
    expect(movieBeforeUpdate.Saved).toEqual('False');

    const res = await request(app)
      .put(putMovie)
      .send({ saved: LOWER_CASE_TRUE, watched: LOWER_CASE_FALSE });
    expect(res.statusCode).toEqual(200);

    const movieAfterUpdate = getMovie();
    expect(movieAfterUpdate.Watched).toEqual('False');
    expect(movieAfterUpdate.Saved).toEqual('True');
  });

  it(`should return 412 is the value of the "watched" property is wrong`, async () => {
    const res = await request(app).put(putMovie).send({ watched: 'FALSE' });
    expect(res.statusCode).toEqual(412);
  });
});
