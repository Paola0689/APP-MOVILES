import React, {useContext, useState} from 'react'
import { SignOffUserCase } from '../../../Domain/useCase/userLocal/SignOffUser';
import userLocal from '../../hooks/userLocal';
import * as ImagePicker from 'expo-image-picker';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCase/auth/RegisterWithImage';
import { SaveUserUseCase } from '../../../Domain/useCase/userLocal/SaveUser';
import { User } from '../../../Domain/entity/User';
import { UpdateUserUseCase } from '../../../Domain/useCase/user/UpdateUser';
import { UpdateUserImageUseCase } from '../../../Domain/useCase/user/UpdateWithImage';
import { ResponseAPI } from '../../../Data/sources/remote/models/ResponseApi';
import { Context } from '../../Context/Context';


const EditInfoViewModel = (user: User) => {
const [errorMessage, seterrorMessage] = useState('');
const [successMessage, setsuccessMessage] = useState('');
const [values, setValues] =useState(user);
const {getUserSession} =userLocal(); 
const [image, setImage] = useState<ImagePicker.ImagePickerAsset>();
const {saveUserSession} = useContext(Context)
    

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setImage(result.assets[0]);
    }
  };

  const takPhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setImage(result.assets[0]);
    }
  };

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const update = async () => {
      if(isValidForm()){
        let response = {} as ResponseAPI;

        if(values.image?.includes('https://')){
           response = await UpdateUserUseCase(values)
        }else{
           response = await UpdateUserImageUseCase(values, image!)
        }
      
        console.log('RESULT: ' + JSON.stringify(response));
      if(response.success){
        saveUserSession(response.data);
        setsuccessMessage(response.message)
      }else{
        seterrorMessage(response.message);
      }
      }
      
    }

    const isValidForm = (): boolean => {
      if(values.name === ''){
        seterrorMessage('Ingrese su nombre');
        return false;
      }
      if(values.lastname === ''){
        seterrorMessage('Ingrese su apellido(s)');
        return false;
      }
      if(values.email === ''){
        seterrorMessage('Ingrese correo electrónico');
        return false;
      }
      if(values.phone === ''){
        seterrorMessage('Ingrese número de teléfono');
        return false;
      }
      
      return true;
    }

    const signOff = async () => {
        await SignOffUserCase();
    } 

    return {
      ...values,
      onChange,
      update,
      errorMessage,
      pickImage,
      takPhoto,
      user,
      signOff,
      successMessage
    }
}

export default EditInfoViewModel;
