/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from "react-native-navigation";
import App from './App';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import UpdateProfileScreen from './components/UpdateProfileScreen';
import HomeScreen from './components/Home/HomeScreen';
import CategoriesScreen from './components/Categories/CategoriesScreen';
import RecipesScreen from './components/Recipes/RecipesScreen';
import IngredientDetailScreen from './components/Ingredient/IngredientDetailScreen';
import IngredientScreen from './components/Ingredient/IngredientScreen';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('Splash', () => SplashScreen);
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Signup', () => SignupScreen);
Navigation.registerComponent('UpdateProfile', () => UpdateProfileScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Category', () => CategoriesScreen);
Navigation.registerComponent('Recipes', () => RecipesScreen);
Navigation.registerComponent('IngredientDetail', () => IngredientDetailScreen);
Navigation.registerComponent('Ingredient', () => IngredientScreen);

const splashRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Splash'
          }
        }
      ]
    }
  }
}

const loginRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login'
          }
        }
      ]
    }
  }
}

const mainRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Home'
          }
        }
      ]
    }
  }
}

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'rgb(255, 90, 102'
    },
    topBar: {
      title: {
        color: 'white'
      },
      backButton: {
        color: 'white'
      },
      background: {
        color: 'rgb(255, 90, 102)'
      }
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14
    }
  });
  Navigation.setRoot(splashRoot);
})
