import React , {useState} from 'react';
import {TouchableHighlight, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,} from '@react-navigation/drawer';
import HomeScreen from './Home/HomeScreen';
import CategoriesScreen from './Categories/CategoriesScreen';
import RecipesScreen from './Recipes/RecipesScreen';
import IngredientDetailScreen from './Ingredient/IngredientDetailScreen';
import IngredientScreen from './Ingredient/IngredientScreen';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import UpdateProfileScreen from './UpdateProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';

const Stack = createStackNavigator();

const MenuButton = ({navigation}) => {
  return (
    <TouchableHighlight  style = {{marginLeft: 10}} onPress = {() => {navigation.openDrawer()}}>
      <Image source={require('../images/menu.png')}/>
    </TouchableHighlight>
  )
}

// const LogoutButton = ({navigation}) => {{
//   return (
//     <TouchableHighlight  
//       style = {{marginRight: 10}}
//       onPress = {async () => {
//           try {
//             await firebase.auth().signOut();
//           } catch (e) {
//             console.log(e);
//           }
//       }} 
//     >
//       <Ionicons name='ios-home' size={30} />
//     </TouchableHighlight>
//   )
// }}

LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SPLASH' component={SplashScreen} />
      <Stack.Screen name='LOGIN' component={LoginScreen} />
      <Stack.Screen name='SIGNUP' component={SignupScreen} />
    </Stack.Navigator>
  )
}

UpdateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='UPDATE_PROFILE' component={UpdateProfileScreen} />
    </Stack.Navigator>
  )
}

HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='HOME' 
        component={HomeScreen} 
        options={{
          title: 'Home', 
          headerLeft:() => (
            <MenuButton navigation={navigation}/>
          ),
          // headerRight:() => (
          //   <LogoutButton navigation={navigation}/>
          // )
        }} 
      />
      <Stack.Screen name='RECIPES' component={RecipesScreen} options={{title: 'Recipes'}} />
      <Stack.Screen name='INGREDIENTS' component={IngredientDetailScreen} options={{title: 'Ingredient Detail'}} />
      <Stack.Screen name='INGREDIENT' component={IngredientScreen} options={{title: 'Ingredient'}} />
    </Stack.Navigator>
  )
}

CategoryStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='CATEGORIES' 
        component={CategoriesScreen} 
        options={{title: 'Categories', headerLeft:() => (
          <MenuButton navigation={navigation}/>
        )}} 
      />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
DrawerStack = () => {
  return (
    // (firebase.auth().currentUser == null) ? (
    //   <NavigationContainer>
    //     <LoginStack />
    //   </NavigationContainer>
    // ) : (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={HomeStack} options={{
          drawerIcon: ({color, size}) => <Ionicons name='ios-home' size={size} color={color} />
        }} />
        <Drawer.Screen name="CATEGORIES" component={CategoryStack} options={{
          drawerIcon: ({color, size}) => <Ionicons name='ios-list-box' size={size} color={color} />
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
    // )
        
  )
}

export default DrawerStack;