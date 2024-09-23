import React from 'react';
import { HotelRepositoryImp } from '../../../Data/repositories/HotelReposiroty';


const {searchByName} = new HotelRepositoryImp();

const SearchHotelsUseCase = async (searchQuery: string) => {
  try {
    const results = await searchByName(searchQuery); // Asumiendo que searchByName devuelve un array de hoteles
    return { results, error: null };
  } catch (error) {
    return { results: [], error };
  }
};

export default SearchHotelsUseCase;
