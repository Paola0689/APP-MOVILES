import { ResponseAPI } from "../../Data/sources/remote/models/ResponseApi";
import { Hotel } from "../entity/Hotel";
import * as ImagePicker from 'expo-image-picker';

export interface HotelRepository {
    getAll(): Promise<Hotel[]>;
    create(hotel: Hotel, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPI>;
    update(hotel: Hotel): Promise<ResponseAPI>;
    updateWithImage(hotel: Hotel, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPI>;
    remove(id: string): Promise<ResponseAPI>;
    searchByName(name: string): Promise<Hotel[]>;
}