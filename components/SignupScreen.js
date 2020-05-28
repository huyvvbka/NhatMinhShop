import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight
} from 'react-native';
import firebase from 'react-native-firebase';

export default SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  signup = () => {
    firebase.auth().createUserWithEmailAndPassword(email.trim(), password.trim())
      .then((result) => {
        // TODO navigate login page
      }).catch((error) => {
        setErrorMessage(error.message);
        alert(errorMessage);
      })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.title}>Create new account</Text>
        <View style={styles.container}>
          <Text style={{color:'red', fontSize: 16}}>{errorMessage}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Re enter your password"
            secureTextEntry={true}
            value={rePassword}
            onChangeText={setRePassword}
          />
          <TouchableHighlight style={styles.button} onPress={signup}>
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
  textButton: {
    color: 'white',
  }
})