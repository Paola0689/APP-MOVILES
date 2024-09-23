import { Axios, AxiosError } from 'axios';
import { User } from '../../Domain/entity/User';
import { Auth } from '../../Domain/repositories/Auth';
import { ApiTripAdvisor, ApiTripAdvisorImg } from '../sources/remote/api/ApiTripAdvisor';
import { ResponseAPI } from '../sources/remote/models/ResponseApi';
import { ImagePickerAsset } from 'expo-image-picker';
import mime from 'mime'


export class AuthImplement implements Auth {
    async register(user: User): Promise<ResponseAPI>{
        try {
          const response = await ApiTripAdvisor.post<ResponseAPI>('/users/create', user);
          return Promise.resolve(response.data);
        
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            const apiError:ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)

        }
        
    }

    async registerImage(user: User, file: ImagePickerAsset): Promise<ResponseAPI> {
      try {
        let data = new FormData();
        //@ts-ignore
        data.append('image', {
          uri: file.uri,
          name: file.uri.split('/').pop(),
          type: mime.getType(file.uri)!
        });

        data.append('user', JSON.stringify(user));

        const response = await ApiTripAdvisorImg.post<ResponseAPI>('/users/createImage', data);
        return Promise.resolve(response.data);
      
      } catch (error) {
          let e = (error as AxiosError);
          console.log('ERROR: ' +JSON.stringify(e.response?.data));
          const apiError:ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
          return Promise.resolve(apiError)

      }
    }
       
    async login(email: string, password: string): Promise<ResponseAPI>{
        try {
          const response = await ApiTripAdvisor.post<ResponseAPI>('/users/login', {
            email: email,
            password: password
          });
          return Promise.resolve(response.data);
        
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            const apiError:ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)

        }
        
    }
}