import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';
import {Navigation} from 'react-native-navigation';
const splashRoot = {
  root: {
    stack: {
      children: [{
        component: {
          name: 'Splash'
        }
      }]
    }
  }
}
export default SettingScreen = (props) => {

  logout = async () => {
    try {
      await firebase.auth().signOut();
      Navigation.setRoot(splashRoot);
    } catch (e) {
      console.log(e);
    }
  }

  openSideMenu = () => {
    Navigation.mergeOptions(props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text> SettingScreen </Text>
      <TouchableHighlight style={styles.logout} onPress={logout}>
        <Text>Logout</Text>
      </TouchableHighlight>
      <TouchableHighlight style = {styles.logout} onPress = {openSideMenu}>
        <Text>Open side menu</Text>
      </TouchableHighlight>
    </View>
  );
}

SettingScreen.options = {
  topBar: {
    title: {
      text: 'Setting'
    }
  },
  bottomTab: {
    text: 'Setting'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
  }
})