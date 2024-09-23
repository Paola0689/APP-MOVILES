import React, { useEffect, useRef, useState } from 'react'
import * as Location from 'expo-location'
import MapView, { Camera } from 'react-native-maps';
import { Hotel } from '../../../../Domain/entity/Hotel';


const ClientHotelMapViewModel = (hotel: Hotel) => {

    const [messagePermissions, setmessagePermissions] = useState('');
    const [position, setPosition] = useState<Location.LocationObjectCoords>();
    const mapRef = useRef<MapView | null>(null);
    const [refPoint, setRefPoint] = useState({
        name: '',
        latitude: 0.0,
        longitude: 0.0
    });
    let positionSuscription: Location.LocationSubscription;
    const [origin, setOrigin] = useState({
        latitude: 0.0,
        longitude: 0.0
    }); 

    const [destination, setDestination] = useState({
        latitude: hotel?.lat!,
        longitude: hotel?.lng!
    })
  
    useEffect(() => {
      const requestPermissions = async () => {
        const foreground = await Location.requestForegroundPermissionsAsync();

        if(foreground.granted){
            startForegroundUpdate();
        }
      }
  
      requestPermissions();
    }, [])

    const onRegionChangeComplete = async (latitude: number, longitude: number) => {
        try {
            const place= await Location.reverseGeocodeAsync({
                latitude: latitude,
                longitude: longitude
            });

            let city;
            let street;
            let streetNumber;

            place.find(p => {
                city = p.city;
                street = p.street;
                streetNumber = p.streetNumber;
                setRefPoint({
                    name: `${street}, ${streetNumber}, ${city}`,
                    latitude: latitude,
                    longitude: longitude
                });
            })

        } catch (error) {
            console.log('ERROR: ' + error)
        }
    }
    
    const startForegroundUpdate = async () => {
        const {granted} = await Location.getForegroundPermissionsAsync();

        if(!granted) {
                setmessagePermissions('Permiso de ubicacion denegado')
            return; 
        }

        const location = await Location.getLastKnownPositionAsync();
        setPosition(location?.coords);
        setOrigin({
            latitude: location?.coords.latitude!,
            longitude: location?.coords.longitude!
        })
        const newCamera: Camera = {
            center: {latitude: location?.coords.altitude!, longitude: location?.coords.longitude!},
            zoom: 15,
            heading: 0,
            pitch: 0,
            altitude: 0
        }; 

        mapRef.current?.animateCamera(newCamera, {duration: 2000})

        positionSuscription?.remove();
        positionSuscription = await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.BestForNavigation
            },
            location => {
                console.log('POSITION' + JSON.stringify(location.coords, null, 3));
                setPosition(location?.coords)
            }
        )
    }

    const stopForegroundUpdate = () => {
        positionSuscription?.remove();
        setPosition(undefined);
    }

    return {
        messagePermissions,
        position,
        mapRef,
        origin,
        destination,
        ...refPoint,
        onRegionChangeComplete,
        stopForegroundUpdate
    };
}

export default ClientHotelMapViewModel
