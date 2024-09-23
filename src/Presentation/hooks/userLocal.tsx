import React, { useEffect, useState } from 'react'
import { GetUserUseCase } from '../../Domain/useCase/userLocal/GetUser';
import { User } from '../../Domain/entity/User';

const userLocal = () => {
    const [user, SetUser] = useState<User>()

   useEffect(() => {
    getUserSession();
   }, [])

   const getUserSession = async() => {
        const user = await GetUserUseCase();
        SetUser(user);
   }


   return {user, getUserSession}
}
  


export default userLocal
