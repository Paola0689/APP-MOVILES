import { UserLocalRepImp } from "../../../Data/repositories/UserLocalRep";


const {signOff} = new UserLocalRepImp();

export const SignOffUserCase = async () => {
    return await signOff();
}