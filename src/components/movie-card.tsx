import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Movie } from '../models/movie-type';
import formatDate from '../helpers/format-date';
import './movie-card.css';

type Props = {
    movie: Movie;
}

const MovieCard: FunctionComponent<Props> = ({ movie }) => {
    const history = useHistory();

    const goToMovieDetails = (id: number) => {
        history.push(`/movies/${id}`)
    }

    return (
        <div className="col s6 m4 mb-4" onClick={() => goToMovieDetails(movie.id)} key={movie.id}>
            <div className="card large" style={{ width: '100%', height: '100%' }}>
                <div className="card-image" style={{ width: '50%', height: '100%' }}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="card-stacked" style={{ width: '35%', height: '100%'}}>
                    <div>
                        <h2 className="card-title" >{movie.title}</h2>
                        <p className="card-text"><small>Release Date : {formatDate(movie.release_date)}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;