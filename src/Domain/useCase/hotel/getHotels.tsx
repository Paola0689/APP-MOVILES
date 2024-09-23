import React from 'react'
import { HotelRepositoryImp } from '../../../Data/repositories/HotelReposiroty'

const {getAll} = new HotelRepositoryImp();

const getHotelsUseCase = async () => {
  return await getAll();
}

export default getHotelsUseCase
