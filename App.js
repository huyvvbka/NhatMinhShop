import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AddItem from './components/AddItem';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import UpdateProfileScreen from './components/UpdateProfileScreen';
import AppStackNavigator from './components/AppStackNavigator';
import DrawerNavigator from './components/DrawerNavigator';
import HomeScreen from './components/Home/HomeScreen';
import CategoriesScreen from './components/Categories/CategoriesScreen';
import RecipesScreen from './components/Recipes/RecipesScreen'
import DrawerStack from './components/AppNavigation';
export default  App = () => {
  return (
    <DrawerStack />
    // <UpdateProfileScreen />
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <AddItem />
    // </View>
  );
}
