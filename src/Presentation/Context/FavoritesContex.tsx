import { createContext, useEffect, useState } from "react";
import { Hotel } from "../../Domain/entity/Hotel";
import GetFavoritesUseCase from "../../Domain/useCase/favorites/GetFavorites";
import { ToastAndroid } from "react-native";
import SaveFavoritesUseCase from "../../Domain/useCase/favorites/SaveFavorites";

export interface FavoritesContextProps {
    favorites: Hotel[],
    getFavorites(): Promise<void>,
    saveItem(hotel: Hotel): Promise<void>,
    deleteItem(hotel: Hotel): Promise<void>
}

export const FavoritesContext = createContext({} as FavoritesContextProps);

export const FavoritesProvider = ({children}: any) => {

    const [favorites, setFavorites] = useState<Hotel[]>([]);

    useEffect(() => {
      getFavorites();
    }, [])
    

    const getFavorites = async(): Promise<void> => {
        const result = await GetFavoritesUseCase();
        setFavorites(result);
    }

    const saveItem = async (hotel: Hotel): Promise<void> => {
        const index = favorites.findIndex((h) => h.id == hotel.id);
        if(index == -1) {
            const updatedFavorites = [...favorites, hotel];
            await SaveFavoritesUseCase(updatedFavorites);
            setFavorites(updatedFavorites);
        }else{
            ToastAndroid.show('El hotel ya ha sido agregado', ToastAndroid.LONG);
        }
    }

    const deleteItem  = async (hotel: Hotel): Promise<void> => {
        const updatedFavorites = favorites.filter((h) => h.id !== hotel.id);
        await SaveFavoritesUseCase(updatedFavorites);
        setFavorites(updatedFavorites)
    }

    return(
        <FavoritesContext.Provider value={{
            favorites,
            getFavorites,
            saveItem,
            deleteItem
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}