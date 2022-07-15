import React, {Dispatch, SetStateAction} from 'react';
import {MovieResponse} from '../../hooks';
import {MovieInterface} from '../../screens/Components';

interface MoviesContextInterface {
  loading: boolean;
  response: MovieResponse;
  error: any;
  movies: MovieInterface[];
  set_movies: Dispatch<SetStateAction<MovieInterface[]>>;
}
export const MoviesContext = React.createContext<MoviesContextInterface>(
  {} as MoviesContextInterface,
);
