import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface LoadingProps {
  msg: string;
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const Loading: FC<LoadingProps> = ({msg}) => {
  return (
    <View style={styles.container}>
      <LottieView
        style={{width: 250, height: 250}}
        source={require('../../../assets/Lottie/loading.json')}
        autoPlay
      />
      <Text style={{color: 'white', fontWeight: '700', fontSize: 15}}>
        {msg}
      </Text>
    </View>
  );
};
