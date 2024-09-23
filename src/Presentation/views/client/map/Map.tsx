import React, { useEffect } from 'react';
import { StyleSheet, Text, ToastAndroid, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import useViewModel from './ViewModel';
import CustomButton from '../../../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../navigatior/ClientStackNavigator';
import { useFocusEffect } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '../../../contants/GoogleMapApiKey';

interface Props extends StackScreenProps<ClientStackParamList, 'HotelMapScreen'>{};
const HotelMapScreen = ({navigation, route}: Props) => {
  const {hotel} = route.params;
  const { messagePermissions, position, origin, destination, mapRef, name, latitude, longitude, onRegionChangeComplete, stopForegroundUpdate} = useViewModel(hotel);

  useEffect(() => {
    if (messagePermissions !== '') {
      ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
    }
  }, [messagePermissions]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      console.log('EVENTO: beforeRemove');
      stopForegroundUpdate();
    });
  
    return unsubscribe;
  }, [navigation]);
  
  

  const handleMapReady = () => {
    if (position) {
      const newCamera = {
        center: {
          latitude: position.latitude,
          longitude: position.longitude,
        },
        zoom: 15,
      };
      mapRef.current?.animateCamera(newCamera, { duration: 2000 });
    }
  };

  return (
    <View style={styles.container}>
      {position ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          onRegionChangeComplete={(region) => {
            onRegionChangeComplete(region.latitude, region.longitude);
          }}
          initialRegion={{
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onMapReady={handleMapReady}
        >
          {
            position !== undefined &&
            <Marker
            coordinate={position}
            >
            <Image
            source={require('../../../../../assets/gps.png')}
            style = {{width: 50, height: 50}}
            />
            </Marker>
          }

          {
            hotel && typeof hotel.lat === 'number' && typeof hotel.lng === 'number' &&
            <Marker
              coordinate={{latitude: hotel.lat, longitude: hotel.lng}}
            >
              <Image
                source={require('../../../../../assets/hotelD.png')}
                style={{width: 50, height: 50}}
              />
            </Marker>
          }


          {
            origin.latitude !== 0.0 &&
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="#0286FF"
          />
          }
          
          
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}
      <TouchableOpacity style = {styles.backContainer} onPress={() => navigation.goBack()}>
          <Image
            style = {styles.back}
            source={require('../../../../../assets/back.png')}
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLocation: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    resizeMode: 'contain',
    top: 200,
    zIndex: 1, 
  },
  refPoint: {
    backgroundColor: '#d4d4d4',
    width: '70%',
    position: 'absolute',
    borderRadius: 5,
    top: 10,
    paddingVertical: 4,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, 
  },
  btnRefPoint: {
    zIndex: 1,
    width: '70%',
    top: 550
  },
  info: {
    backgroundColor: 'white',
    height: '35%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
});

export default HotelMapScreen;
