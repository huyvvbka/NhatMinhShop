import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';

export default AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [imageUrl, setItemImageUrl] = useState();
  const ref = firebase.firestore().collection('StoreItem');
  const refStore  =firebase.storage().ref();
  const imageRef = refStore.child('images');
  const options = {
    title: 'Select image item',
    customButtons: [{ name: 'fb', title: 'Choose Photo from library' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  addItem = (itemName, itemDescription, itemPrice, imageUrl) => {
    let timestamp = Date.now();
    ref.doc(timestamp.toString()).set({
      itemName: itemName,
      itemDescription: itemDescription,
      itemPrice: itemPrice
    }).then(() => {
      setItemName('');
      setItemDescription('');
      setItemPrice('');
      setItemImageUrl();
      console.log(`Add success`);
    }).catch((error) => {
      console.log(`Add fail with error: ${error.message}`);
    })
    let imageFood = imageRef.child(timestamp.toString())
    imageFood.putFile(imageUrl.uri);
  }

  chooseImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setItemImageUrl(source);
        console.log(source);
      }
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}> AddItem </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter name item"
          onChangeText={(text) => setItemName(text)}
          value={itemName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter description item"
          onChangeText={(text) => setItemDescription(text)}
          value={itemDescription}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter price item"
          onChangeText={(text) => setItemPrice(text)}
          value={itemPrice}
        />
        <Image source={imageUrl} style={{ width: 300, height: 200, marginBottom: 10 }} />
        <TouchableHighlight
          style={styles.addButton}
          onPress={() => chooseImage()}
        >
          <Text>Choose images</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.addButton}
          onPress={() => addItem(itemName, itemDescription, itemPrice, imageUrl)}
        >
          <Text>Add New Item</Text>
        </TouchableHighlight>
      </View>
    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: 'red'
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius:15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  }
})