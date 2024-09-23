import * as ImagePicker from 'expo-image-picker';
import { ResponseAPI } from '../../Data/sources/remote/models/ResponseApi';
import { Hotel } from '../../Domain/entity/Hotel';
import { createContext, useEffect, useState } from 'react';
import createHotelUseCase from '../../Domain/useCase/hotel/createHotel';
import getHotelsUseCase from '../../Domain/useCase/hotel/getHotels';
import updateHotelUseCase from '../../Domain/useCase/hotel/updateHotel';
import updateWitImageHotelUseCase from '../../Domain/useCase/hotel/updateWithImageHotel';
import deleteHotelUseCase from '../../Domain/useCase/hotel/deleteHotel';



export interface HotelContextProps {
    hotels: Hotel[],
    getHotels(): Promise<void>,
    create(hotel: Hotel, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPI>,
    updateWithImage(hotel: Hotel, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPI>,
    update(hotel: Hotel): Promise<ResponseAPI>
    remove(id: string): Promise<ResponseAPI>
}

export const HotelContext = createContext({} as HotelContextProps);

export const HotelProvider = ({children}: any) => {

    const [hotels, setHotels] = useState<Hotel[]>([]) 

    useEffect(() => {
        if(hotels.length===0){
            getHotels();
        }
    }, []);

    const getHotels = async (): Promise<void> => { 
        const result = await getHotelsUseCase();
        setHotels(result);
    }

    const create = async (hotel: Hotel, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPI> => {
    const response = await createHotelUseCase(hotel, files);
    getHotels();
    return response;
    }

    const update = async (hotel: Hotel): Promise<ResponseAPI> => {
        const response = await updateHotelUseCase(hotel);
        getHotels();
        return response;
    }

    const updateWithImage = async (hotel: Hotel, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPI> => {
        const response = await updateWitImageHotelUseCase(hotel, files);
        getHotels();
        return response;
    }

    const remove = async (id: string): Promise<ResponseAPI> => {
        const response = await deleteHotelUseCase(id);
        getHotels();
        return response;
    }

    return (
        <HotelContext.Provider value={{
            hotels,
            getHotels,
            create,
            update,
            updateWithImage,
            remove
        }}>
            {children}
        </HotelContext.Provider>
    )
}