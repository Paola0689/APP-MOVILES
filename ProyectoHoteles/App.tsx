import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Presentation/views/login/Login';
import RegisterScreen from './src/Presentation/views/register/Register';


export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
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
            headerShown: true,
            title: 'Registro'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 