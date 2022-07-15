import {Platform} from 'react-native';

export const getYear = (date: string) => {
  const date_instance = new Date(date);
  return date_instance.getFullYear();
};

export const getPlatform = () => {
  return Platform.OS;
};
