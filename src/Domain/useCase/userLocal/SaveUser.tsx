import { UserLocalRepImp } from "../../../Data/repositories/UserLocalRep";
import { User } from "../../entity/User";

const {save} = new UserLocalRepImp();

export const SaveUserUseCase = async (user: User) => {
    return await save(user);
}