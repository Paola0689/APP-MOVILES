import React from 'react'
import { View, Text, FlatList, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native'
import useViewModel from './ViewModel'
import Favoritesitem from './item';
import { ClientStackParamList } from '../../../navigatior/ClientStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<ClientStackParamList, 'FavoritesScreen'>{};
const FavoritesScreen = ({navigation, route}: Props) => {
  const {favorites, deleteItem}= useViewModel();
  return (
    <ImageBackground
      style= {styles.backgroundImage}
      source={require('../../../../../assets/backg.png')}
    >
    <View style = {{top: 100}}>
      <FlatList
        data= {favorites}
        keyExtractor={ (item) => item.id!}
        renderItem={ ({ item }) => 
        <Favoritesitem
            hotel={item}
            deleteItem={deleteItem}
        />
      }
      />
    </View>
    <TouchableOpacity style = {styles.backContainer} onPress={() => navigation.goBack()}>
          <Image
            style = {styles.back}
            source={require('../../../../../assets/back.png')}
          />
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },
  back: {
    width: 40,
    height: 40
  },
  backContainer: {
    position: 'absolute',
    top: 50,
    left: 20
  }
})

export default FavoritesScreen
