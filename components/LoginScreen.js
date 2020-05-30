import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import firebase from 'react-native-firebase';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {Navigation} from 'react-native-navigation';

export default LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  login = () => {
    firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim())
    .then(() => {
      let name =firebase.auth().currentUser.displayName;
      let nameScreen = (name === null) ? 'UpdateProfile' : 'Home';
      Navigation.push(props.componentId, {
        component: {
          name: 'UpdateProfile',
          options: {
            topBar: {
              visible: false
            }
          }
        }
      })
      // navigation.navigate((name === null) ? 'UPDATE_PROFILE' : 'HOME');
    }).catch((error) => {
      alert('Login failed with error: ' + error.message);
    });
  }

  loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.reject(new Error('The user cancelled request'));
        }
        return AccessToken.getCurrentAccessToken();
      })
      .then((data) => {
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        return firebase.auth().signInWithCredential(credential);
      })
      .then(() => {
        navigation.navigate('HOME');
      })
      .catch((error) => {
        alert('Login failed with error: ' + error.message);
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.container}>
          <TextInput
            keyboardType='email-address'
            style={styles.textInput}
            placeholder="Enter your email or phone number"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableHighlight style={styles.button} onPress={login}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableHighlight>
          <Text style={{marginVertical: 20}}>OR</Text>
          <TouchableHighlight style={styles.facebookButton} onPress={loginWithFacebook}>
            <Text style={styles.textButton}>Login width Facebook</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {Navigation.push(props.componentId, {
            component: {
              name: 'Signup',
              options: {
                topBar: {
                  title: {
                    text: 'Signup'
                  }
                }
              }
            }
          })}}>
            <Text>Your not have account?</Text>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

LoginScreen.options = {
  topBar: {
    visible: false
  }
}

// LoginScreen.navigationOptions = {
//   headerShown: false
// }

const styles = StyleSheet.create({
  title: {
    marginTop: 80,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(255, 107, 117)',
    marginBottom: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 15,
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 90, 102)',
  },
  facebookButton: {
    width: 200,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(66, 103, 178)',
    marginBottom: 15
  },
  textButton: {
    color: 'white',
  }
})