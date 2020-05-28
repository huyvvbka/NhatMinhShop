import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';

export default UpdateProfileScreen = ({navigation}) => {
  const refStore = firebase.storage().ref();
  const imageRef = refStore.child('userAvatar');
  const user = firebase.auth().currentUser;
  const userAvatar = imageRef.child(user.email);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayName, setDisplayName] = useState(user.displayName);
  const [imageUrl, setImageUrl] = useState(user.photoURL);
  const options = {
    title: 'Select image item',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  chooseImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        setErrorMessage('User cancelled image picker')
      } else if (response.error) {
        setErrorMessage(response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImageUrl(response.uri);
      }
    });
  }

  updateProfile = () => {
    userAvatar.put(imageUrl).then((response) => {
      user.updateProfile({
        displayName: displayName,
        photoURL: response.downloadURL
      }).then(() => {
        alert('Profile updated successfully');
      }).catch((error) => {{
        setErrorMessage(error.message);
      }})
    }).catch((error) => {
      setErrorMessage(error.message);
    });
  }

  logout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Splash');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.title}>Update profile</Text>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={chooseImage}>
            <Image source={{uri: imageUrl == null ? 'https://firebasestorage.googleapis.com/v0/b/nhatminhshop-2f127.appspot.com/o/Screen%20Shot%202020-05-20%20at%2023.38.30.png?alt=media&token=f2ce97c1-2092-4592-80ed-1ed3b8e27b02' : imageUrl}} style={{ width: 150, height: 150, borderRadius:75, marginBottom: 10, backgroundColor: 'gray' }} />
          </TouchableWithoutFeedback>
          
          <Text style={{color:'red', fontSize: 16}}>{errorMessage}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            value={displayName}
            onChangeText={setDisplayName}
          />
          <TouchableHighlight style={styles.button} onPress={updateProfile}>
            <Text style={styles.textButton}>Update</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={logout}>
            <Text style={styles.textButton}>Logout</Text>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

UpdateProfileScreen.navigationOptions = {
  headerShown: false
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
    marginBottom:10
  },
  textButton: {
    color: 'white',
  }
})