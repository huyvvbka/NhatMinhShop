import React from 'react';
import {
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';

export default Header = ({navigation}) => {
  return (
    <TouchableHighlight style = {
      styles.headerLeft
    }
    onPress = {
      () => navigation.openDrawer()
    } >
      <Image 
        source={require('../images/menu.png')}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15
  }
})