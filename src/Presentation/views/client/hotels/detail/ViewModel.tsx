import React, { useContext } from 'react';
import { Hotel } from '../../../../../Domain/entity/Hotel';
import { FavoritesContext } from '../../../../Context/FavoritesContex';

const ClientHotelDetailViewModel = (hotel: Hotel) => {
    const HotelImages: string[] = [
        hotel.image1,
        hotel.image2,
        hotel.image3,
        hotel.image4
    ]; 

    const { favorites, saveItem } = useContext(FavoritesContext);

    const isFavorite = favorites.some(favorite => favorite.id === hotel.id);

    const addToFav = () => {
        saveItem(hotel);
    }

    return {
        HotelImages,
        isFavorite,
        addToFav
    }
}

export default ClientHotelDetailViewModel;
