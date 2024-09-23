import React from 'react'
import { FavoritesRepositoryImpl } from '../../../Data/repositories/FavoritesRepository'
import { Hotel } from '../../entity/Hotel';

const { getFav } = new FavoritesRepositoryImpl();
const GetFavoritesUseCase = async () => {
  return await getFav();
}

export default GetFavoritesUseCase
