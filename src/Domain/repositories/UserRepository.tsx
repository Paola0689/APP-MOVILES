import { ResponseAPI } from "../../Data/sources/remote/models/ResponseApi";
import { User } from "../entity/User";
import * as ImagePicker from 'expo-image-picker';


export interface UserRepository{
    update(user: User): Promise<ResponseAPI>;
    updateWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPI>;
}


