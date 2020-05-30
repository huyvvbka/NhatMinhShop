import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import {
  getIngredientName,
  getAllIngredients
} from '../../data/MockDataAPI';
import {Navigation} from 'react-native-navigation';

const {width, height} = Dimensions.get('window');
export default IngredientDetailScreen = (props) => {
  const ingredients = props.ingredients;
  const ingredientsArray = getAllIngredients(ingredients);
  renderIngredient = ({ item }) => (
    <TouchableHighlight 
      TouchableHighlight underlayColor = 'rgba(73,182,77,1,0.9)'
      onPress={() => {
        let name = getIngredientName(item[0].ingredientId);
        let ingredient = item[0].ingredientId;
        Navigation.push(props.componentId, {
          component : {
            name: 'Ingredient',
            passProps: {
              name,
              ingredient
            },
            options : {
              topBar: {
                title: {
                  text: 'Ingredient'
                }
              }
            }
          }
        })
        // navigation.navigate('INGREDIENT', { ingredient, name });

      }}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={this.renderIngredient}
        keyExtractor={item => item.recipeId}
      />
    </View>
  );
}

const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 60
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    textAlign: 'center'
  },
  photo: {
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 60
  }
})