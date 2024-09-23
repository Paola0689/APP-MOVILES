import { AuthImplement } from "../../../Data/repositories/Auth";
import { User } from "../../entity/User";
import * as ImagePicker from 'expo-image-picker';

const {registerImage} = new AuthImplement();

export const RegisterWithImageAuthUseCase = async (user: User, file: ImagePicker.ImagePickerAsset) => {
    return await registerImage(user, file);
}