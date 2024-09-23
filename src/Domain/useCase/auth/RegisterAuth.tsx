import { AuthImplement } from "../../../Data/repositories/Auth";
import { User } from "../../entity/User";

const {register} = new AuthImplement();

export const RegisterAuth = async (user: User) => {
    return await register(user);
}