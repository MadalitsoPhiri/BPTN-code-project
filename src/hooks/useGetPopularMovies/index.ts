import {useEffect, useState} from 'react';
import {MovieInterface} from '../../screens/Components';
import useAxios from '../useAxios';
export interface MovieResponse {
  page: number;
  results: MovieInterface[];
}
export const useGetPopularMovies = () => {
  const {response, error, loading} = useAxios({
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17',
    method: 'get',
  });
  const [movies, set_movies] = useState<MovieInterface[]>([]);
  useEffect(() => {
    if (error) {
      console.log('error', error);
    }

    if (response) {
      const movie_response = response as MovieResponse;
      const processed_movie_response: MovieInterface[] = [];
      movie_response.results.map((item: MovieInterface) => {
        processed_movie_response.push({...item, liked: false});
      });
      set_movies(processed_movie_response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, error]);
  return {
    response: response as MovieResponse,
    error,
    loading,
    movies,
    set_movies,
  };
};
