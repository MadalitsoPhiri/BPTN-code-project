import {
  FlatList,
  Image,
  ImageBackground,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BASE_URL, IMAGE_BASE_URL} from '../../config';
interface MovieInterface {
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
}
interface ItemProps {
  item: MovieInterface;
}
const Item = ({item}: ItemProps) => (
  <TouchableOpacity
    onPress={() => {}}
    style={{
      marginHorizontal: 15,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'column',
    }}>
    {/* <Text style={{color: 'white'}}>{item.title}</Text> */}
    {/* <Image
      source={{uri: `${BASE_URL}/${item.backdrop_path}`}}
      style={{width: 50, borderRadius: 20, height: 30}}
    /> */}
    <View
      style={{
        height: 200,
        width: '100%',
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
      }}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={{
          uri: IMAGE_BASE_URL + item.poster_path,
        }}
      />
      <View
        style={{
          borderRadius: 8,
          opacity: 0.8,
          display: 'flex',
          position: 'absolute',
          backgroundColor: 'black',
          paddingHorizontal: 6,
          paddingVertical: 8,
          right: 10,
          top: 10,
        }}>
        <Text style={{color: 'white', fontWeight: '900', fontSize: 10}}>
          18+
        </Text>
      </View>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{}}></View>
      <View style={{display: 'flex', flexDirection: 'row'}}></View>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 15,
      }}>
      <Text
        style={{
          fontWeight: '900',
          fontSize: 16,
          color: 'white',
          marginBottom: 15,
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontWeight: '300',
          fontSize: 13,
          color: 'lightgray',
          marginBottom: 15,
        }}>
        {item.overview}
      </Text>
    </View>
  </TouchableOpacity>
);

const renderItem: ListRenderItem<MovieInterface> = ({item}) => {
  return (
    <Item
      item={item}
      //   onPress={() => setSelectedId(item.id)}
      //   backgroundColor={{}}
      //   textColor={{}}
    />
  );
};
export const Movies = () => {
  const movies: MovieInterface[] = [
    {
      adult: false,
      backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
      genre_ids: [10751, 16, 12, 35, 14],
      id: 438148,
      original_language: 'en',
      original_title: 'Minions: The Rise of Gru',
      overview:
        'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
      popularity: 15259.056,
      poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      release_date: '2022-06-29',
      title: 'Minions: The Rise of Gru',
      video: false,
      vote_average: 7.8,
      vote_count: 270,
    },
    {
      adult: false,
      backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg',
      genre_ids: [14, 28, 12],
      id: 453395,
      original_language: 'en',
      original_title: 'Doctor Strange in the Multiverse of Madness',
      overview:
        'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
      popularity: 5278.507,
      poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      release_date: '2022-05-04',
      title: 'Doctor Strange in the Multiverse of Madness',
      video: false,
      vote_average: 7.5,
      vote_count: 4305,
    },
    {
      adult: false,
      backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
      genre_ids: [28, 12, 14],
      id: 616037,
      original_language: 'en',
      original_title: 'Thor: Love and Thunder',
      overview:
        'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      popularity: 4414.917,
      poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      release_date: '2022-07-06',
      title: 'Thor: Love and Thunder',
      video: false,
      vote_average: 6.9,
      vote_count: 635,
    },
    {
      adult: false,
      backdrop_path: '/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg',
      genre_ids: [12, 28, 878],
      id: 507086,
      original_language: 'en',
      original_title: 'Jurassic World Dominion',
      overview:
        'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
      popularity: 2550.482,
      poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
      release_date: '2022-06-01',
      title: 'Jurassic World Dominion',
      video: false,
      vote_average: 6.6,
      vote_count: 1087,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        contentContainerStyle={{marginTop: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
