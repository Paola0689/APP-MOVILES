import React from 'react'
import { Hotel } from "../../entity/Hotel";
import { HotelRepositoryImp } from "../../../Data/repositories/HotelReposiroty";
import * as ImagePicker from 'expo-image-picker';

const {updateWithImage} = new HotelRepositoryImp();

const updateWitImageHotelUseCase = async (hotel: Hotel, files: ImagePicker.ImagePickerAsset[]) => {
  return await updateWithImage(hotel, files)
}

export default updateWitImageHotelUseCase
