import React, {FC} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import {IMAGE_BASE_URL} from '../../../config';
import {useProcessLiked} from '../../../hooks/useProcessLiked';
import {getYear} from '../../../utilities';
import {Like} from '../LikeButton';

export interface MovieInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  liked?: boolean;
}
export interface ItemProps {
  item: MovieInterface;
  index: number;
}
export const MovieItem: FC<ItemProps> = ({item, index}) => {
  const {set_liked, movies} = useProcessLiked();
  const handle_like_clicked = () => {
    set_liked(index);
  };
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.image_container}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: IMAGE_BASE_URL + item.poster_path,
          }}
        />
        {item.adult && (
          <View style={styles.image_badge}>
            <Text style={styles.badge_text}>18+</Text>
          </View>
        )}
      </View>
      <View style={styles.item_midsection_container}>
        <View style={styles.item_stats_container}>
          <View style={styles.year_container}>
            <Text style={styles.year_text}>Year</Text>
            <Text style={styles.year_value}>{getYear(item.release_date)}</Text>
          </View>

          <View style={styles.votes_container}>
            <Text style={styles.votes_text}>Votes</Text>
            <Text style={styles.vote_value}>{item.vote_count}</Text>
          </View>
        </View>
        <View style={styles.like_button_container}>
          <Pressable onPress={handle_like_clicked}>
            <Like liked={movies[index].liked} style={styles.like_button} />
          </Pressable>
        </View>
      </View>
      <View style={styles.item_text_container}>
        <Text style={styles.item_title}>{item.title}</Text>
        <Text style={styles.item_overview}>{item.overview}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  image_container: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%'},
  item_text_container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  image_badge: {
    borderRadius: 8,
    opacity: 0.8,
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'black',
    paddingHorizontal: 6,
    paddingVertical: 8,
    right: 10,
    top: 10,
  },
  badge_text: {color: 'white', fontWeight: '900', fontSize: 10},
  item_title: {
    fontWeight: '900',
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
  },
  item_overview: {
    fontWeight: '300',
    fontSize: 13,
    color: 'lightgray',
    marginBottom: 15,
  },
  item_midsection_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  item_stats_container: {display: 'flex', flexDirection: 'row'},
  year_container: {display: 'flex', flexDirection: 'column', marginRight: 20},
  year_text: {color: 'white', fontWeight: '500', marginBottom: 5},
  year_value: {color: 'white', fontWeight: '800', fontSize: 15},
  votes_container: {display: 'flex', flexDirection: 'column'},
  votes_text: {color: 'white', fontWeight: '500', marginBottom: 5},
  vote_value: {color: 'white', fontWeight: '800', fontSize: 15},
  like_button_container: {display: 'flex', flexDirection: 'row'},
  like_button: {width: 30, height: 30},
});
