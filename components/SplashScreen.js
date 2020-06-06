import React, {useState, useEffect} from 'react';
import { View, Text, Animated, Dimensions, StyleSheet } from 'react-native';
import {COLOR_BACKGROUND, COLOR_PINK_MEDIUM} from '../colors';
let {height, width} = Dimensions.get('window');
import firebase from 'react-native-firebase';
import {Navigation} from 'react-native-navigation';
import {loginRoot, mainRoot} from './Stack';

export default SplashScreen = (props) => {
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  const [titleMarginTop, setTitleMarginTop] = useState(new Animated.Value(height/2));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(titleMarginTop, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: false,
      })
    ]).start(async () => {
      let user = await firebase.auth().currentUser;
      Navigation.setRoot(user ? mainRoot : loginRoot)
    });
  });

  return (
    <View style={styles.container}>
      <Animated.Image
          source={require('../images/logo.png')}
          style={{...styles.logo, opacity: logoOpacity}}>
      </Animated.Image>
      <Animated.Text style={{...styles.title, marginTop: titleMarginTop}}>
          Welcome to Nhat Minh Shops
      </Animated.Text>
    </View>
  );
}

SplashScreen.options = {
  topBar: {
    visible: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BACKGROUND
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    width: 400,
    fontSize: 21
  }
});