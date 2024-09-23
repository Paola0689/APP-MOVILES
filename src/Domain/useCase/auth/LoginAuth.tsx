import { AuthImplement } from "../../../Data/repositories/Auth";

const {login} = new AuthImplement();

export const LoginUseCase = async(email: string, password: string) => {
    return await login(email, password);
}
