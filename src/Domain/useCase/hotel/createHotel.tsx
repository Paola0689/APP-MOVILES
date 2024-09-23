import React from 'react'
import { Hotel } from '../../entity/Hotel'
import * as ImagePicker from 'expo-image-picker';
import { HotelRepositoryImp } from '../../../Data/repositories/HotelReposiroty';

const {create} = new HotelRepositoryImp(); 

const createHotelUseCase = async (hotel: Hotel, files: ImagePicker.ImagePickerAsset[]) => {
  return await create(hotel, files);
}

export default createHotelUseCase
