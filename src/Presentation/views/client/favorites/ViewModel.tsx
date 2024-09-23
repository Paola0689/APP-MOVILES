import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Context/FavoritesContex'

const FavoritesViewModel = () => {
    const { favorites, deleteItem} = useContext(FavoritesContext);

  return {
    favorites,
    deleteItem
  }
}

export default FavoritesViewModel
