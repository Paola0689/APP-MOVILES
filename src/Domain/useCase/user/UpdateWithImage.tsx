import { UserRepositoryImp } from "../../../Data/repositories/UserRepository";
import { User } from "../../entity/User";
import * as ImagePicker from 'expo-image-picker';


const {updateWithImage} = new UserRepositoryImp();
export const UpdateUserImageUseCase = async(user: User, file: ImagePicker.ImagePickerAsset) => {
    return await updateWithImage(user, file);
}