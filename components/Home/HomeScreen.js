import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import { recipes } from '../../data/dataArrays';
import {getCategoryName} from '../../data/MockDataAPI';
import {Navigation} from 'react-native-navigation';

export default HomeScreen = (props) => {
  renderRecipes = ({ item }) => (
    <TouchableHighlight 
      underlayColor = 'rgba(73,182,77,1,0.9)'
      onPress = {() => {
        Navigation.push(props.componentId, {
          component: {
            name: 'Recipes',
            passProps: {
              title: item.title,
              category: item.categoryId,
              ingredients: item.ingredients,
              photosArray: item.photosArray,
              time: item.time,
              description: item.description
            },
            options: {
              topBar: {
                title: {
                  text: 'Recipes'
                }
              }
            }
          }
        });
        // navigation.navigate('RECIPES', {item})
        }
      }
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={item => item.recipeId}
      />
    </View>
  );
}

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    },
    bottomTab: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
}

console.disableYellowBox = true;
const {
  width,
  height
} = Dimensions.get('window');
// orientation must fixed
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
  headerLeft: {
    marginLeft: 15
  }
})