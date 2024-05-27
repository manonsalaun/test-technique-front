import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import MovieService from '../services/movie-service';
import { DataContext } from '../store/dataContext';
import MovieCard from '../components/movie-card';

const MovieList: FunctionComponent = () => {
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const { movies, setMovies } = useContext(DataContext);


  const handleSortByDate = () => {
    const sortedData = [...movies].sort((a, b) => {
      const dateA = new Date(a.release_date).getTime();
      const dateB = new Date(b.release_date).getTime();
      return dateB - dateA;
    });
    setMovies(sortedData);
    setIsSorted(true);
  };

  useEffect(() => {
    MovieService.getMovies().then(movies => setMovies(movies));
  }, []);


  return (
    <div>
      <h1 className="center">New movies</h1>
      <div className="container">
        <button className="waves-effect waves-light btn" onClick={handleSortByDate} disabled={isSorted}
        >Sort by Release Date (Newest to Oldest)</button>
        <div className="row">
          {movies ? (movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))) : (
              <h4 className="center">Aucun film à afficher !</h4>
            )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;