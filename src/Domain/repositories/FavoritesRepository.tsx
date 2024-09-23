import { Hotel } from "../entity/Hotel";

export interface FavoritesRepository {
    save(hotels: Hotel[]): Promise<void>;
    getFav(): Promise<Hotel[]>;
}