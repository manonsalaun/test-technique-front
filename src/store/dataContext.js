import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  return (
    <DataContext.Provider value={{ movie, setMovie,movies,setMovies, similarMovies, setSimilarMovies }}>
      {children}
    </DataContext.Provider>
  );
};