import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHotelsList from '../views/admin/hotels/HotelsLisst';
import AdminReservations from '../views/admin/reservations/Reservations';
import ProfileScreen from '../views/profile/Profile';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from '../views/admin/hotels/map/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminHotelsNavigator from './AdminHotelsNavigator';
import { HotelProvider } from '../Context/HotelContext';
import SearchNavigator from './SearchNavigator';

export type AdminStackParamList = {
  MapScreen: undefined
}

const Tab = createBottomTabNavigator();

const  AdminNavigator = () => {
  return (
    <HotelState>

    <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#0286FF',
          tabBarInactiveBackgroundColor: '#0286FF',
          tabBarLabelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12
          }
        }}>
          <Tab.Screen 
          name="AdminHotelsNavigator" 
          component={AdminHotelsNavigator} 
          options={ ({route, navigation}) => (
            {
              title: 'Hoteles',
              tabBarLabel: 'Hoteles',
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={ require('../../../assets/hotel.png') }
                  style={{ width: 25, height: 25 }}
                  />
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('HotelCreateScreen')}>
                  <Image 
                    source={ require('../../../assets/add.png') }
                    style={{ width:35, height: 35, marginRight: 15 }}
                  />
                </TouchableOpacity>
              )
            }
          )}
          />

<Tab.Screen 
          name="SearchNavigator" 
          component={SearchNavigator} 
          options={ ({route, navigation}) => (
            {
              title: 'Buscar',
              tabBarLabel: 'Buscar',
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={ require('../../../assets/search.png') }
                  style={{ width: 25, height: 25 }}
                  />
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('HotelCreateScreen')}>
                  <Image 
                    source={ require('../../../assets/add.png') }
                    style={{ width:35, height: 35, marginRight: 15 }}
                  />
                </TouchableOpacity>
              )
            }
          )}
          />
          
          <Tab.Screen 
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Perfil',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
              source={require('../../../assets/userad.png')}
              style= {{ width: 30, height:30}}
              />
            )
          }}
          />
          
        </Tab.Navigator>
    </HotelState>
  );
}

const HotelState = ({children}: any) => {
  return(
    <HotelProvider>
      {children}
    </HotelProvider>
  )
}


export default AdminNavigator