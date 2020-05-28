import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet,FlatList, TouchableHighlight } from 'react-native';
import {getRecipesByIngredient, getCategoryName, getIngredientUrl} from '../../data/MockDataAPI';
const {width, height} = Dimensions.get('window');
export default IngredientScreen = ({route, navigation}) => {
  const {name} = route.params;
  const {ingredient} = route.params;
  const recipes = getRecipesByIngredient(ingredient);

  renderRecipes = ({ item }) => (
    <TouchableHighlight 
      underlayColor = 'rgba(73,182,77,1,0.9)'
      onPress = {() => {navigation.navigate('RECIPES', {item})}} 
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey'}}>
        <Image 
          style={{width: width, height: 250, alignSelf: 'center'}}
          source={{uri: getIngredientUrl(ingredient)}}
        />
      </View>
      <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold'}}>Recipes with {name}:</Text>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={item => item.recipeId}
      />
    </View>
  );
}
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColumns = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColumns + 1) * RECIPE_ITEM_MARGIN) / recipeNumColumns,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColumns + 1) * RECIPE_ITEM_MARGIN) / recipeNumColumns,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },
})