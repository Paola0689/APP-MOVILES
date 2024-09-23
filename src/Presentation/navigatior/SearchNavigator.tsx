import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AdminHotelListScreen from '../views/admin/hotels/list/HotelList';
import HotelCreateScreen from '../views/admin/hotels/create/HotelCreate';
import { Image, TouchableOpacity } from 'react-native';
import MapScreen from '../views/admin/hotels/map/Map';
import HotelUpdateScreen from '../views/admin/hotels/update/HotelUpdate';
import { Hotel } from '../../Domain/entity/Hotel';
import { HotelProvider } from '../Context/HotelContext';
import SearchScreen from '../views/client/search/Search';
import HotelDetailScreen from '../views/client/hotels/detail/HotelDetail';
import SearchDetailScreen from '../views/client/search/detail/SearchDetail';



const Stack = createNativeStackNavigator<SearchStackParamList>();

export type SearchStackParamList = {
  AdminHotelListScreen: undefined,
  HotelCreateScreen: {refPoint: string, latitude: number, longitude: number} | undefined,
  MapScreen: undefined,
  HotelUpdateScreen: {hotel: Hotel},
  SearchScreen: undefined,
  SearchDetailScreen: {hotel: Hotel}
}

const SearchNavigator = () => {
  return (
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={ ({route, navigation}) => (
                {
                  headerShown: true,
                  title: 'HOTELES',
                  headerTintColor: 'white',
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('HotelCreateScreen')}>
                      <Image 
                        source={ require('../../../assets/add.png') }
                        style={{ width:35, height: 35 }}
                      />
                    </TouchableOpacity>
                  ),
                  headerStyle: {
                    backgroundColor: '#00BBF5', 
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 28,
                    
                  }
                }
            )}
            />

            <Stack.Screen
              name="HotelCreateScreen"
              component={HotelCreateScreen}
              options={{
                headerShown: true,
                title: 'Añadir Hotel'
              }}
            />

            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: true,
                title: 'Añadir Hotel'
              }}
              />

        <Stack.Screen
          name="SearchDetailScreen"
          component={SearchDetailScreen}
          options={{
            headerShown: false,
            title: 'Editar Hotel'
          }}
        />


    </Stack.Navigator>
    
  )
}


export default SearchNavigator
