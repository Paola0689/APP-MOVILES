import React, { useContext, useState } from 'react'
import { Context } from '../../../../Context/Context';
import { GetCommentUseCase } from '../../../../../Domain/useCase/comments/getComments';
import { Comment } from '../../../../../Domain/entity/Comment';

const CommentViewModel = () => {

    const [comment, setComment] = useState<Comment[]>([]);
    const { user } = useContext(Context);

    const getComment = async () => {
        const result = await GetCommentUseCase(user.id!); 
        setComment(result);
    }

  return {
    comment,
    getComment
  }
}

export default CommentViewModel
