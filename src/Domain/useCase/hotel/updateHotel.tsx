import React from 'react'
import { Hotel } from "../../entity/Hotel";
import { HotelRepositoryImp } from "../../../Data/repositories/HotelReposiroty";

const {update} = new HotelRepositoryImp();

const updateHotelUseCase = async (hotel: Hotel) => {
  return await update(hotel)
}

export default updateHotelUseCase
