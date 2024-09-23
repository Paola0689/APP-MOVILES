import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigatior/ClientStackNavigator';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import useViewModel from './ViewModel'
import Carousel from 'react-native-reanimated-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props extends StackScreenProps<ClientStackParamList, 'HotelDetailScreen'>{};
const HotelDetailScreen = ({navigation, route}: Props) => {
  const {hotel} = route.params;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const {HotelImages, isFavorite, addToFav} = useViewModel(hotel);
  const [isPressed, setIsPressed] = useState(false);
  
    useEffect(() => {
      const loadPressedState = async () => {
        try {
          const storedIsPressed = await AsyncStorage.getItem('isPressed');
          if (storedIsPressed !== null) {
            setIsPressed(JSON.parse(storedIsPressed));
          }
        } catch (error) {
          console.error('Error al cargar el estado de presión:', error);
        }
      };
  
      loadPressedState();
    }, []);
  
    const handlePress = async () => {
      try {
        setIsPressed(!isPressed);
        
        await AsyncStorage.setItem('isPressed', JSON.stringify(!isPressed));
      } catch (error) {
        console.error('Error al almacenar el estado de presión:', error);
      }
    };
  
  
  return (
  <View style = {styles.container}>
    <GestureHandlerRootView>
      <Carousel
          loop={false}
          width={width}
          height={height / 2}
          autoPlay={true}
          data={ HotelImages }
          scrollAnimationDuration={3000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={ ({item}) => 
            <Image 
                source={{uri: item}}
                style= {styles.images}
            />
          }
          />
    </GestureHandlerRootView>

    <TouchableOpacity style={styles.favContent} onPress={() => {
      addToFav();
      handlePress();
    }}>
      <Image
        style={{ width: 40, height: 40, tintColor: isPressed ? 'red' : undefined }}
        source={require('../../../../../../assets/hearth.png')}
      />
    </TouchableOpacity>

    <View style= {styles.hotelInfo}>
      <View style={{flexDirection: 'row'}}>
        <Text style = {styles.title}>{hotel.name}</Text>
      </View>

      <View>
        <Text style= {styles.text}>{hotel.description}</Text>

        <TouchableOpacity onPress={() => navigation.navigate('HotelMapScreen', { hotel: hotel })}>
        <Image
          source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?center=${hotel.lat},${hotel.lng}&zoom=15&size=300x300&markers=color:red%7C${hotel.lat},${hotel.lng}&key=AIzaSyBptKxA37EWdVpWomZexmMIUk9pcL8mDS4` }}
          style={styles.map}
        />
      </TouchableOpacity>
        

        <View style = {styles.formInfo}>
        <Image
        source={(require('../../../../../../assets/wdAdds.png'))}
        style= {styles.ImageIcon}
        />
        <View style= {styles.Info}>
          <Text style={styles.textContent}>{hotel.street}, {hotel.colony}</Text>
          </View>
      </View>

      <View style = {styles.formInfo}>
        <Image
        source={(require('../../../../../../assets/wndHPhone.png'))}
        style= {styles.ImageIcon}
        />
        <View style= {styles.Info}>
          <Text style={styles.textContent}>{hotel.phone}</Text>
          </View>
      </View>

      <View style = {styles.iconContent}>
        <TouchableOpacity onPress={() => navigation.navigate('FavoritesScreen')}>
        <Image
        source={(require('../../../../../../assets/Bluehearth.png'))}
        style= {styles.CommentIcon}
        />
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={() => navigation.navigate('CommentListScreen')}>
        <Image
        source={(require('../../../../../../assets/comments.png'))}
        style= {styles.CommentIcon}
        />
        </TouchableOpacity>
        
      </View>
      
      </View>
    </View>
    <TouchableOpacity style = {styles.backContainer} onPress={() => navigation.goBack()}>
          <Image
            style = {styles.back}
            source={require('../../../../../../assets/back.png')}
          />
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: '80%'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  hotelInfo: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    bottom: 0
  },
  formInfo: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#0979FC',
    marginHorizontal: 20
  },
  iconContent: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 70
  },
  ImageIcon: {
    width: 42,
    height: 36,
    marginLeft: 10
  },
  CommentIcon: {
    width: 50,
    height: 50,
    marginLeft: 20
  },
  title: {
    fontSize: 22,
    top: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 20,
    color: '#294CA7'
  },
  text: {
    top: 15,
    marginLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textContent: {
    fontSize: 16
  },
  textComment: {
    fontSize: 20,
    color: '#010C72',
    fontWeight: 'bold',
  },
  Info: {
    marginHorizontal: 15
  },
  map: {
    width: '80%',
    height: 150,
    alignSelf: 'center',
    marginTop: 25,
  },
  favContent: {
    width: 50,
    height: 45,
    position: 'absolute',
    top: '35%',
    left: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  favIcon: {
    width: 35,
    height: 35,
    top: 5,
    marginLeft: 190,
    //position: 'absolute'
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

export default HotelDetailScreen
