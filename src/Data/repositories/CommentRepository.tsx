import { Comment } from "../../Domain/entity/Comment";
import { CommentRepository } from "../../Domain/repositories/CommentRepository";
import { ApiTripAdvisor } from "../sources/remote/api/ApiTripAdvisor";
import { ResponseAPI } from "../sources/remote/models/ResponseApi";
import { Axios, AxiosError } from 'axios';

export class CommentRespositoryImp implements CommentRepository{
    async getByUser(idUser: string): Promise<Comment[]> {
        try {
            const response = await ApiTripAdvisor.get<Comment[]>(`/comments/findByUser/${idUser}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            return Promise.resolve([])
        }
    }
    async create(comment: Comment): Promise<ResponseAPI> {
        try {
            const response = await ApiTripAdvisor.post<ResponseAPI>('/comments/create', comment);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' +JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }
}