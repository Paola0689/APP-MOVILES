import React, { useState } from 'react';
import SearchHotelsUseCase from '../../../../Domain/useCase/hotel/searchHotel';
import { Hotel } from '../../../../Domain/entity/Hotel';

function HotelSearchViewModel() {
  const [searchResults, setSearchResults] = useState<Hotel[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const { results, error } = await SearchHotelsUseCase(searchQuery);
      setSearchResults(results);
      setError(error as Error);
      setIsLoading(false);
    } catch (error) {
        setError(error as Error);
      setIsLoading(false);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    error,
    handleSearch
  };
}

export default HotelSearchViewModel;
