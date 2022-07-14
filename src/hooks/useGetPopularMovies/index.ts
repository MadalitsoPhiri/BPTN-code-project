import {useEffect, useState} from 'react';
import {MovieInterface} from '../../screens/Components';
import useAxios from '../useAxios';

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
      console.log('response', response);
      const copy: MovieInterface[] = [];
      response.results.map((item: MovieInterface) => {
        copy.push({...item, liked: false});
      });
      set_movies(copy);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, error]);
  return {response, error, loading, movies, set_movies};
};
