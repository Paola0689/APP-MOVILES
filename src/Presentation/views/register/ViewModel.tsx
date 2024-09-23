import React, {useState} from 'react'
import { RegisterAuth } from '../../../Domain/useCase/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';
import { SaveUserUseCase } from '../../../Domain/useCase/userLocal/SaveUser';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCase/auth/RegisterWithImage';
import userLocal from '../../hooks/userLocal';

const ViewModel = () => {

    const [errorMessage, seterrorMessage] = useState('');
    const [values, setValues] =useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confPassword: '',
        image: '' 
    });

    const {user, getUserSession} = userLocal();
    console.log('Usuario Registrado' + JSON.stringify(user));
    const [image, setImage] = useState<ImagePicker.ImagePickerAsset>();
    

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

    const register = async () => {
      if(isValidForm()){
      const result = await RegisterWithImageAuthUseCase(values, image!)
      console.log('RESULT: ' + JSON.stringify(result));
      if(result.success){
        await SaveUserUseCase(result.data);
        getUserSession();
      }else{
        seterrorMessage(result.message);
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
      if(values.password === ''){
        seterrorMessage('Ingrese contraseña');
        return false;
      }
      if(values.name === ''){
        seterrorMessage('Ingrese nuevamente la contraseña');
        return false;
      }
      if(values.password !== values.confPassword){
        seterrorMessage('Las contraseñas no coinciden');
        return false;
      }
      if(values.image === ''){
        seterrorMessage('Seleccione una imagen');
        return false;
      }
      return true;
    }

  return {
    ...values,
    onChange,
    register,
    errorMessage,
    pickImage,
    takPhoto,
    user
  }
    
}

export default ViewModel
