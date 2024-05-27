import React, { FunctionComponent, useState, useEffect } from 'react';
import { Movie } from '../models/movie-type';
import MoviePage from '../components/movie-card';
import MovieService from '../services/movie-service'

const MovieList: FunctionComponent = () => {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [isSorted, setIsSorted] = useState<boolean>(false);


  const handleSortByDate = () => {
    const sortedData = [...movieData].sort((a, b) => {
      const dateA = new Date(a.release_date).getTime();
      const dateB = new Date(b.release_date).getTime();
      return dateB - dateA;
    });
    setMovieData(sortedData);
    setIsSorted(true);
  };

  useEffect(() => {
    MovieService.getMovies().then(movies => setMovieData(movies));
  }, []);


  return (
    <div>
      <h1 className="center">Movie details</h1>
      <div className="container">
        <button className="waves-effect waves-light btn" onClick={handleSortByDate} disabled={isSorted}
        >Sort by Date (Newest to Oldest)</button>
        <div className="row">
          {movieData.map(movie => (
            <MoviePage key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;