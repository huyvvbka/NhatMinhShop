import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import UpdateProfileScreen from './UpdateProfileScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignupScreen
  },
  UpdateProfile: {
    screen: UpdateProfileScreen
  },
}, {
    initialRouteName: 'Splash'
});

export default createAppContainer(AppNavigator)