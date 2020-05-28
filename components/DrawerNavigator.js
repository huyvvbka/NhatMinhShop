import HomeScreen from './Home/HomeScreen';
import CategoriesScreen from './Categories/CategoriesScreen';
import RecipesScreen from './Recipes/RecipesScreen';
import IngredientDetailScreen from './Ingredient/IngredientDetailScreen';
import IngredientScreen from './Ingredient/IngredientScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
const Drawer = createDrawerNavigator();
export default DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen 
          name="HOME"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen 
          name="CATEGORIES"
          component={CategoriesScreen}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen 
          name="RECIPES"
          component={RecipesScreen}
          options={{
            tabBarLabel: 'Recipes',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen 
          name = "INGREDIENTS"
          component={IngredientDetailScreen}
          options={{
            tabBarLabel: 'Ingredients',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen 
          name = "INGREDIENT"
          component={IngredientScreen}
          options={{
            tabBarLabel: 'Ingredient',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}