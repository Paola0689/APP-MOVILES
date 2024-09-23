import { UserLocalRepImp } from "../../../Data/repositories/UserLocalRep";


const {getUser} = new UserLocalRepImp();

export const GetUserUseCase = async () => {
    return await getUser();
}