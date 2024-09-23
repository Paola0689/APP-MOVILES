import React, { useContext, useState } from 'react'
import { HotelContext } from '../../../../Context/HotelContext'
import { Hotel } from '../../../../../Domain/entity/Hotel';
import getHotelsUseCase from '../../../../../Domain/useCase/hotel/getHotels';
import deleteHotelUseCase from '../../../../../Domain/useCase/hotel/deleteHotel';


const HotelListViewModel = () => {
  
    //const [hotels, setHotels] = useState<Hotel[]>([]);
    const [responseMessage, setResponseMessage] = useState('');
    const {hotels, remove, getHotels} = useContext(HotelContext);
    
   /* const getHotels = async() => {
        const result = await getHotelsUseCase();
        setHotels(result);
    }*/

    const deleteHotel = async (id_Hotel: string) => {
        const result = await remove(id_Hotel);
        setResponseMessage(result.message);
      /*  if(result.success){
            getHotels();
        }*/
    }

    return {
        hotels,
        responseMessage,
        getHotels,
        deleteHotel
    }
}

export default HotelListViewModel
