import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritiesScreen from '../views/client/favorites/Favorites';
import ClientHotelsList from '../views/client/hotels/HotelList';
import ProfileScreen from '../views/profile/Profile';
import RankingScreen from '../views/client/ranking/Ranking';
import ClientReservations from '../views/client/reservations/Reservations';
import SearchScreen from '../views/client/search/Search';
import { Image } from 'react-native';
import { ClientStackNavigator } from './ClientStackNavigator';


const Tab = createBottomTabNavigator();

const  ClientNavigator =() => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: '#0286FF',
      tabBarInactiveBackgroundColor: '#0286FF',
      tabBarLabelStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
      }
    }}>

    <Tab.Screen name="ClientStackNavigator" 
          component={ClientStackNavigator} 
          options={{
          headerShown: false,
          tabBarLabel: 'Hoteles',
          tabBarIcon: ({ color }) => (
            <Image
            source={require('../../../assets/hotelicon.png')}
            style= {{ width: 30, height:30}}
            />
        )
      }}/>
      
      
      <Tab.Screen name="SearchScreen" 
      component={SearchScreen} 
      options={{
        headerShown: false,
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color }) => (
          <Image
          source={require('../../../assets/search.png')}
          style= {{ width: 30, height:30}}
          />
        )
      }}/>
      <Tab.Screen name="ProfileScreen" 
      component={ProfileScreen} 
      options={{
        headerShown: false,
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color }) => (
          <Image
          source={require('../../../assets/usercl.png')}
          style= {{ width: 30, height:30}}
          />
        )
      }}/>
    </Tab.Navigator>
  );
}

export default ClientNavigator