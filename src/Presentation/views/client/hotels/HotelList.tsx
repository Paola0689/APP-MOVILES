import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import useViewModel from './ViewModel'
import ClientHotelsListItem from './item';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../navigatior/ClientStackNavigator';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientHotelsListScreen'>{};

const ClientHotelsListScreen = ({navigation, route}: Props) => {

  const {hotels, getHotels} = useViewModel();

  useEffect(() => {
    getHotels();
  }, [])
  
  return (
    <ImageBackground
    style= {styles.backgroundImage}
    source={require('../../../../../assets/fondHL.png')}>

    <View style={styles.background}>

      <View style={{alignItems: 'center'}}>
      <Image
        style= {styles.icon}
        source={require('../../../../../assets/logo.png')}
      />
      </View>

    <View style={styles.container}>
    <FlatList
          data={hotels}
          keyExtractor={(item) => item.id!}
          renderItem={({item}) => <ClientHotelsListItem hotel={item} navigation={navigation}/>}
       />
    </View>
    <View style= {{position: 'absolute', bottom: 15}}>
    <TouchableOpacity onPress={() => navigation.navigate('FavoritesScreen')}>
        <Image
            style= {styles.favIcon}
            source={require('../../../../../assets/favorites.png')}
        />
      </TouchableOpacity>
      </View>
    </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  icon: {
    width: 60,
    height: 60,
    top: 10,
    //marginLeft: '44%'
  },
  container: {
    //marginHorizontal: 5, 
    marginTop: 2
  },
  background: {
    width: '90%',
    height: '80%',
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    top: '10%',
    marginLeft: '5%',
    borderRadius: 20
  },
  favIcon: {
    width: 35,
    height: 35,
    marginLeft: '88%',
  }
})

export default ClientHotelsListScreen
