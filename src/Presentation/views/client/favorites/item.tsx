import React from 'react'
import { Hotel } from '../../../../Domain/entity/Hotel'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    hotel: Hotel,
    deleteItem: (hotel: Hotel) => void 
}

const Favoritesitem = ({hotel, deleteItem}: Props) => {
  return (
    <View>
        <View style = {styles.container}>
        
        <View style = {styles.imagecontainer}>
            <Image
                style = {styles.image}
                source={{uri: hotel.image1}}
                resizeMode='cover'
            />
        </View>

        <Text style = {styles.text}>{hotel.name}</Text>

    </View>
        <TouchableOpacity  style={styles.iconContent} onPress={() => deleteItem(hotel)}>
            <Image
                style = {styles.icon}
                source={require('../../../../../assets/deleteFav.png')}
            />
        </TouchableOpacity>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 230,
        backgroundColor: 'white',
        marginHorizontal: 21,
        top: 5,
    },
    imagecontainer: {
        width: '100%',
        height: 170,
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
    },
    text: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 17,
        marginLeft: 20,
        top: 8
    },
    iconContent: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: '70%',
        left: '78%',
        backgroundColor: 'white',
        borderRadius: 60,
        alignItems: 'center'
      },
      icon: {
        width: 30,
        height: 30,
        top: 8
      }
})

export default Favoritesitem
