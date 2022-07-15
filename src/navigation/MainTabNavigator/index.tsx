import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Liked, Movies} from '../../screens';
import {View, Text, StyleSheet} from 'react-native';
import {Heart, Home} from '../../screens/Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetPopularMovies} from '../../hooks/useGetPopularMovies';
import {getPlatform} from '../../utilities';
import {MoviesContext} from '../../context';

const styles = StyleSheet.create({
  header_title: {
    color: 'white',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: '900',
  },
});
export const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {loading, response, error, movies, set_movies} = useGetPopularMovies();

  return (
    <MoviesContext.Provider
      value={{loading, response, error, movies, set_movies}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black',
          },
          header:
            getPlatform() === 'ios'
              ? () => {
                  return (
                    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
                      <View style={{height: 120}}>
                        <Text style={styles.header_title}>Movies</Text>
                      </View>
                    </SafeAreaView>
                  );
                }
              : undefined,
        }}>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Home
                focused={focused}
                style={{color, width: size, height: size}}
              />
            ),
            tabBarActiveTintColor: '#FFFFFF',
            title: 'Movies',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Tab.Screen
          name="Liked"
          component={Liked}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Heart
                style={{color, width: size, height: size}}
                focused={focused}
              />
            ),
            tabBarActiveTintColor: '#FFFFFF',
            title: 'Movies',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
          }}
        />
      </Tab.Navigator>
    </MoviesContext.Provider>
  );
};
