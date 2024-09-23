import { ImagePickerAsset } from 'expo-image-picker';
import { Hotel } from '../../Domain/entity/Hotel';
import { HotelRepository } from '../../Domain/repositories/HotelRepository';
import { ResponseAPI } from '../sources/remote/models/ResponseApi';
import { Axios, AxiosError } from 'axios';
import mime from 'mime'
import { ApiTripAdvisor, ApiTripAdvisorImg } from '../sources/remote/api/ApiTripAdvisor';


export class HotelRepositoryImp implements HotelRepository{
    async searchByName(name: string): Promise<Hotel[]> {
        try {
            const response = await ApiTripAdvisor.get<Hotel[]>(`/hotels/searchByName/${encodeURIComponent(name)}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async  getAll(): Promise<Hotel[]> {
        try {
            const response = await ApiTripAdvisor.get<Hotel[]>('/hotels/getAll');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            return Promise.resolve([])
        }
    }

   async create(hotel: Hotel, files: ImagePickerAsset[]): Promise<ResponseAPI> {
        try {
            let data = new FormData();

            files.forEach(file => {
                //@ts-ignore
            data.append('image', {
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
              });
            });

            data.append('hotel', JSON.stringify(hotel));
            const response = await ApiTripAdvisorImg.post<ResponseAPI>('/hotels/create', data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async update(hotel: Hotel): Promise<ResponseAPI> {
        try {
            const response = await ApiTripAdvisor.put<ResponseAPI>('/hotels/update', hotel);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async updateWithImage(hotel: Hotel, files: ImagePickerAsset[]): Promise<ResponseAPI> {
        try {
            let data = new FormData();

            files.forEach(file => {
                //@ts-ignore
            data.append('image', {
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
              });
            });

            data.append('hotel', JSON.stringify(hotel));
            const response = await ApiTripAdvisorImg.put<ResponseAPI>('/hotels/updateImage', data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async remove(id: string): Promise<ResponseAPI> {
      try {
        const response = await ApiTripAdvisor.delete<ResponseAPI>(`/hotels/delete/${id}`);
        return Promise.resolve(response.data)
      } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
      }  
    }
}