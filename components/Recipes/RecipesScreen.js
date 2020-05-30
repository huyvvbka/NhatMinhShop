import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import {getCategoryName} from '../../data/MockDataAPI';
import {Navigation} from 'react-native-navigation';
export default RecipesScreen = (props) => {
  const [position, setPosition] = useState(1);
  const ingredients = props.ingredients;
  const photos = [];
  useEffect(() => {
    let length = props.photosArray.length;
    for(let i = 0; i < length; i++) {
      let photo = {url: props.photosArray[i]};
      photos.push(photo);
    }
  })
  return (
    <View style={styles.container}>
      <Slideshow
        style={styles.slider}
        dataSource={photos}
        position={position}
        onPositionChanged={setPosition}
        arrowSize={0}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style = {styles.category} >{getCategoryName(props.category)}</Text>
      <View style={styles.informationContainer}>
      <Image source={require('../../images/icons/time.png')}/>
      <Text style={styles.time}>{props.time} minutes</Text>
      </View>
      <TouchableHighlight 
        style={styles.button} onPress={() => {
          Navigation.push(props.componentId, {
            component : {
              name: 'IngredientDetail',
              passProps: {
                ingredients: ingredients
              },
              options: {
                topBar: {
                  title: {
                    text: 'Ingredient detail'
                  }
                }
              }
            }
          })
        }}>
        <Text style={{color: '#2cd18a', fontSize: 16}}>View Ingredient</Text>
      </TouchableHighlight>
      <ScrollView>
        <Text style={styles.description}>{props.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slider: {
    marginBottom: 30
  },
  title: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#2cd18a'
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginTop: 30,
    borderColor: '#2cd18a'
  },
  description: {
    marginTop: 30,
    fontSize: 16,
    marginHorizontal: 30
  }
})
