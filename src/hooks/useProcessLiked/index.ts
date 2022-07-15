import {useContext} from 'react';
import {MoviesContext} from '../../context';

export const useProcessLiked = () => {
  const {movies, set_movies} = useContext(MoviesContext);
  const set_liked = (index: number) => {
    if (movies[index]) {
      const copy = [...movies];
      copy[index].liked = !copy[index].liked;
      set_movies(copy);
    }
  };

  const check_liked = (index: number) => {
    if (movies[index]) {
      return movies[index].liked;
    } else {
      return false;
    }
  };

  return {set_liked, check_liked, movies};
};
