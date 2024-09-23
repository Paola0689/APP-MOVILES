import React from 'react'
import { FavoritesRepositoryImpl } from '../../../Data/repositories/FavoritesRepository'
import { Hotel } from '../../entity/Hotel';

const { save } = new FavoritesRepositoryImpl();
const SaveFavoritesUseCase = async (hotels: Hotel[]) => {
  return await save(hotels)
}

export default SaveFavoritesUseCase
