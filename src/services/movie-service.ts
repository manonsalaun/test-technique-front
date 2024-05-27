import { Movie } from "../models/movie-type";

export default class MovieService {
  static apiKey = process.env.REACT_APP_MY_API_KEY

  static getMovies(): Promise<Movie[]> {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MovieService.apiKey}`)
      .then(response => response.json())
      .then(data => data.results)
      .catch(error => this.handleError(error))
  }

  static getMovie(id: number): Promise<Movie | null> {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MovieService.apiKey}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error))
  }

  static getSimilarMovies(id: number): Promise<Movie[]> {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${MovieService.apiKey}`)
      .then(response => response.json())
      .then(data => data.results)
      .catch(error => this.handleError(error))
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error)
  }
}