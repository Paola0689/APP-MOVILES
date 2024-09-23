import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ClientHotelsListScreen from "../views/client/hotels/HotelList";
import HotelCreateScreen from "../views/admin/hotels/create/HotelCreate";
import { Hotel } from "../../Domain/entity/Hotel";
import HotelDetailScreen from "../views/client/hotels/detail/HotelDetail";
import HotelMapScreen from "../views/client/map/Map";
import { FavoritesProvider } from "../Context/FavoritesContex";
import FavoritesScreen from "../views/client/favorites/Favorites";
import CommentListScreen from "../views/client/comments/list/CommentList";
import CreateCommentScreen from "../views/client/comments/create/CreateComment";
import SearchDetailScreen from "../views/client/search/detail/SearchDetail";


export type ClientStackParamList = {
    ClientHotelsListScreen: undefined,
    HotelDetailScreen: {hotel: Hotel},
    HotelMapScreen: {hotel: Hotel},
    FavoritesScreen: undefined,
    CommentListScreen: undefined,
    CreateCommentScreen: undefined,
    SearchDetailScreen: {hotel: Hotel}

}

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
    return(
    <FavoritesState>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name = 'ClientHotelsListScreen'
                component={ClientHotelsListScreen}
            />

            <Stack.Screen
                name = 'HotelDetailScreen'
                component={HotelDetailScreen}
            />

            <Stack.Screen
              name="HotelMapScreen"
              component={HotelMapScreen}
              options={{
                headerShown: false,
                title: 'Añadir Hotel'
              }}
              />

            <Stack.Screen
              name="FavoritesScreen"
              component={FavoritesScreen}
              options={{
                headerShown: false,
                title: 'Favoritos',
                headerStyle: {
                    backgroundColor: '#00BBF5', 
                },
              }}
              />

            <Stack.Screen
              name="CreateCommentScreen"
              component={CreateCommentScreen}
              options={{
                headerShown: true,
                title: 'Añadir Comentario'
              }}
              />

            <Stack.Screen
              name="CommentListScreen"
              component={CommentListScreen}
              options={{
                headerShown: true,
                title: 'Comentarios'
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
    </FavoritesState>
        
    )
}

const FavoritesState = ({children}: any) => {
    return (
        <FavoritesProvider>
            {children}
        </FavoritesProvider>
    )
}
