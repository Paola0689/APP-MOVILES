import React from 'react'
import { HotelRepositoryImp } from '../../../Data/repositories/HotelReposiroty'

const {remove} = new HotelRepositoryImp();

const deleteHotelUseCase = async (id: string) => {
  return await remove(id)
}

export default deleteHotelUseCase
