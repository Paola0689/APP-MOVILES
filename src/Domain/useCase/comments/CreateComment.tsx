import { CommentRespositoryImp } from "../../../Data/repositories/CommentRepository";
import { Comment } from "../../entity/Comment";

const { create } = new CommentRespositoryImp();
export const CreateComment = async (comment: Comment) => {
    return await create(comment)
}