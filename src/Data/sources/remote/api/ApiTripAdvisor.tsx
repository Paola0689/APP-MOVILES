import axios, { AxiosHeaders } from 'axios';
import { LocalStorage } from '../../local/LocalStorage';
import { User } from '../../../../Domain/entity/User';

const ApiTripAdvisor = axios.create({
    baseURL: 'http://192.168.100.61:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

const ApiTripAdvisorImg = axios.create({
    baseURL: 'http://192.168.100.61:3000/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json',
    }
});

ApiTripAdvisor.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('user');
        if(data){
            const user: User = JSON.parse(data as any);
            (config.headers as AxiosHeaders).set("Authorization", `${user?.session_token!}`);
        }
        return config;
    }
)

ApiTripAdvisorImg.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('user');
        if(data){
            const user: User = JSON.parse(data as any);
            (config.headers as AxiosHeaders).set("Authorization", `${user?.session_token!}`);
        }
        return config;
    }
)

export {ApiTripAdvisor, ApiTripAdvisorImg}