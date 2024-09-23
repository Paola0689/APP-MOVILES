import { createContext, useEffect, useState } from "react";
import { User } from "../../Domain/entity/User";
import { SaveUserUseCase } from "../../Domain/useCase/userLocal/SaveUser";
import { GetUserUseCase } from "../../Domain/useCase/userLocal/GetUser";
import { SignOffUserCase } from "../../Domain/useCase/userLocal/SignOffUser";


export const userInitialState: User = {
    id:            '',
    name:          '',
    lastname:      '',
    phone:         '',
    email:         '',
    image:         '',
    password:      '',
    confPassword:  '',
    session_token: '',
    roles:         []
}

export interface ContextProps{
    user: User;
    saveUserSession: (user: User) => Promise<void>
    getUserSession: () => Promise<void>
    signOff: () => Promise<void>
}

export const Context = createContext( { } as ContextProps);


export const UserProvider = ({children}: any) => {

    const [user, setUser] = useState(userInitialState); 

    useEffect(() => {
        getUserSession();
    }, [])

    const saveUserSession = async (user: User) => {
        await SaveUserUseCase(user);
        setUser(user);
    }

    const getUserSession = async() => {
        const user = await GetUserUseCase();
        setUser(user);
    }

    const signOff  = async () => {
        await SignOffUserCase();
        setUser(userInitialState)
    }

    return(
        <Context.Provider value= {{
            user,
            saveUserSession,
            getUserSession,
            signOff
        }}>
            {children}
            </Context.Provider>
    )
}
