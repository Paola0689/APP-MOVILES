import React, {useContext, useState} from 'react'
import { LoginUseCase } from '../../../Domain/useCase/auth/LoginAuth';
import { Context } from '../../Context/Context';

const LoginViewModel = () => {

    const [errorMessage, seterrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    //const {user, getUserSession} = userLocal();
    const {user, saveUserSession} = useContext(Context);
    console.log('Usuario Logueado' + JSON.stringify(user));

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const login = async() => {
      
      if(isValidForm()){
        const response = await LoginUseCase(values.email, values.password);
      console.log('RESPONSE: ' + JSON.stringify(response));
      if(!response.success){
        seterrorMessage(response.message);
      }else{
        saveUserSession(response.data);
      }
      }
      
    }

    const isValidForm = (): boolean => {
      
      if(values.email === ''){
        seterrorMessage('Ingrese correo electrónico');
        return false;
      }
      if(values.password === ''){
        seterrorMessage('Ingrese contraseña');
        return false;
      }

      return true;
    }

  return {
    ...values,
    user,
    onChange,
    login,
    errorMessage
  }
    
}

export default LoginViewModel


