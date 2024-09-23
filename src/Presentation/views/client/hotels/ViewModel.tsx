import React, { useState } from 'react'
import { Hotel } from '../../../../Domain/entity/Hotel'
import getHotelsUseCase from '../../../../Domain/useCase/hotel/getHotels';

const ClientHotelListViewModel = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);

    const getHotels = async () => {
        const result = await getHotelsUseCase();
        setHotels(result);
    }
  return {
    hotels,
    getHotels
  }
}

export default ClientHotelListViewModel
