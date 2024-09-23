import { CommentRespositoryImp } from "../../../Data/repositories/CommentRepository";

const { getByUser } = new CommentRespositoryImp();

export const GetCommentUseCase = async (idUser: string) => {
    return await getByUser(idUser);
}