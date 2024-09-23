import React, { useEffect } from 'react';
import { StyleSheet, Text, ToastAndroid, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import useViewModel from './ViewModel';
import CustomButton from '../../../../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack';
import { HotelStackParamList } from '../../../../navigatior/AdminHotelsNavigator';

interface Props extends StackScreenProps<HotelStackParamList, 'MapScreen'>{};
const MapScreen = ({navigation, route}: Props) => {
  const { messagePermissions, position, mapRef, name, latitude, longitude, onRegionChangeComplete} = useViewModel();

  useEffect(() => {
    if (messagePermissions !== '') {
      ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
    }
  }, [messagePermissions]);

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
        />
      ) : (
        <Text>Loading...</Text>
      )}
      {position && (
        <View style={styles.overlay}>
          <Image
            source={require('../../../../../../assets/gps2.png')}
            style={styles.imageLocation}
          />
          <View style={styles.refPoint}>
            <Text>{name}</Text>
          </View>
          <View style={styles.btnRefPoint}> 
              <CustomButton
                  text='SELECCIONAR PUNTO'
                  onPress={() => {
                    navigation.navigate({
                      name: 'HotelCreateScreen',
                      merge: true, 
                      params: { refPoint: name, latitude: latitude, longitude: longitude}
                    })
                  }}
              />
          </View>
        </View>
      )}
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
    zIndex: 1, // Asegura que la imagen esté por encima del mapa
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
    zIndex: 1, // Asegura que el texto esté por encima del mapa
  },
  btnRefPoint: {
    zIndex: 1,
    width: '70%',
    top: 550
  }
});

export default MapScreen;
