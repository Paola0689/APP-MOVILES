import { Hotel } from "../../Domain/entity/Hotel";
import { FavoritesRepository } from "../../Domain/repositories/FavoritesRepository";
import { LocalStorage } from "../sources/local/LocalStorage";

export class FavoritesRepositoryImpl implements FavoritesRepository {
    async save(hotels: Hotel[]): Promise<void> {
        try {
            const { save } = LocalStorage();
            await save('favorites', JSON.stringify(hotels));
        } catch (error) {
            console.error('Error al guardar favoritos:', error);
            throw error; 
        }
    }

    async getFav(): Promise<Hotel[]> {
        try {
            const { getItem } = LocalStorage();
            const data = await getItem('favorites');
            if (!data) {
                return []; 
            }
            return JSON.parse(data);
        } catch (error) {
            console.error('Error al recuperar favoritos:', error);
            throw error; 
        }
    }
}
