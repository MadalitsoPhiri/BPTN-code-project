import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {Loading, MovieInterface, MovieItem} from '../Components';
import {MoviesContext} from '../../context';

const renderItem: ListRenderItem<MovieInterface> = ({item, index}) => {
  return item.liked ? <MovieItem item={item} index={index} /> : null;
};
export const Liked = () => {
  const {loading, response, error, movies} = React.useContext(MoviesContext);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading msg="Loading" />
      ) : response ? (
        <>
          <Text style={styles.screen_title}>Liked</Text>
          <FlatList
            data={movies}
            renderItem={renderItem}
            contentContainerStyle={{marginTop: 20}}
          />
        </>
      ) : (
        <View>
          <Text>Error{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen_title: {
    color: 'white',
    marginLeft: 20,
    marginVertical: 10,
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '900',
  },
});
