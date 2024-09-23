import { ResponseAPI } from '../../Data/sources/remote/models/ResponseApi';
import {User} from '../entity/User';
import * as ImagePicker from 'expo-image-picker';

export interface Auth{
    loging(email: string, password:string): Promise<ResponseAPI>;
    register(user: User): Promise<ResponseAPI>
    registerImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPI>
}