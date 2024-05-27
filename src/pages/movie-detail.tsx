import React, { FunctionComponent, useEffect, useContext } from 'react';
import { RouteComponentProps, Link, useHistory } from 'react-router-dom';
import MovieService from '../services/movie-service';
import formatDate from '../helpers/format-date';
import { DataContext } from '../store/dataContext';

type Params = { id: string };

const MovieDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    const history = useHistory();
    const { movie, setMovie, similarMovies, setSimilarMovies } = useContext(DataContext);

    const goToMovieDetails = (id: number) => {
        history.push(`/movies/${id}`)
    }

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie));
        MovieService.getSimilarMovies(+match.params.id).then(similarMovie => setSimilarMovies(similarMovie));
    }, [match.params.id]);


    return (
        <div>
            { movie ? (
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <h2 className="header center">{movie.title}</h2>
                        <div className="card hoverable">

                            <div className="card-action">
                                <Link to="/">Retour</Link>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <table className="bordered striped">
                                        <tbody>
                                            <tr>
                                                <td>Date de sortie</td>
                                                <td>{formatDate(movie.release_date)}</td>
                                            </tr>
                                            <tr>
                                                <td>Note moyenne</td>
                                                <td><strong>{movie.vote_average}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Films similaires</td>
                                                <td>
                                                    <table>
                                                        <tbody>
                                                            {similarMovies.map(movie => (
                                                                <tr key={movie.id} style={{ margin: '0', padding: '0' }}>
                                                                    <td>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => goToMovieDetails(movie.id)}
                                                                            style={{ background: 'none', border: 'none', padding: '0', textDecoration: 'underline', cursor: 'pointer' }}
                                                                        >
                                                                            {movie.title}
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                    <h4 className="center">Aucun film à afficher !</h4>
                )}
        </div>
    );
}

export default MovieDetail;