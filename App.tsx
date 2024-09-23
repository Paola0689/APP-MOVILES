import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Presentation/views/login/Login';
import RegisterScreen from './src/Presentation/views/register/Register';
import RolesScreen from './src/Presentation/views/roles/Roles';
import AdminHotelsList from './src/Presentation/views/admin/hotels/HotelsLisst';
import ClientHotelsList from './src/Presentation/views/client/hotels/HotelList';
import AdminNavigator from './src/Presentation/navigatior/AdminTabs';
import ClientNavigator from './src/Presentation/navigatior/ClientTabs';
import EditInformationScreen from './src/Presentation/views/profile/EditInformation ';
import { User } from './src/Domain/entity/User';
import { UserProvider } from './src/Presentation/Context/Context';
import HotelCreateScreen from './src/Presentation/views/admin/hotels/create/HotelCreate';
import { Image, TouchableOpacity } from 'react-native';
import HotelUpdateScreen from './src/Presentation/views/admin/hotels/update/HotelUpdate';
import { Hotel } from './src/Domain/entity/Hotel';
import { ClientStackNavigator } from './src/Presentation/navigatior/ClientStackNavigator';


export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,
  RolesScreen: undefined,
  AdminNavigator: undefined,
  ClientNavigator: undefined,
  EditInformationScreen: {user: User},
  HotelUpdateScreen: {hotel: Hotel}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <UserState>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
            title: 'Registro'
          }}
        />
        <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
        />
          <Stack.Screen
          name="AdminNavigator"
          component={AdminNavigator}
        />
        <Stack.Screen
          name="ClientNavigator"
          component={ClientNavigator}
        />
        <Stack.Screen
          name="EditInformationScreen"
          component={EditInformationScreen}
        />

        <Stack.Screen
          name="HotelUpdateScreen"
          component={HotelUpdateScreen}
          options={{
            headerShown: true,
            title: 'Editar Hotel'
          }}
        />
        
      </Stack.Navigator>
      </UserState>
    </NavigationContainer>
  );
};

const UserState = ({children}: any) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}



export default App; 