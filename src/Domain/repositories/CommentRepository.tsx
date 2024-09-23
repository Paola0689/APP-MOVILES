import { ResponseAPI } from "../../Data/sources/remote/models/ResponseApi";
import { Comment } from "../../Domain/entity/Comment";


export interface CommentRepository{
    create(comment: Comment): Promise<ResponseAPI>;
    getByUser(idUser: string): Promise<Comment[]>;
}