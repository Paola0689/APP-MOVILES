import { User } from "../../Domain/entity/User";
import { UserLocalRep } from '../../Domain/repositories/UserLocalRep';
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserLocalRepImp implements UserLocalRep{

    async save(user: User): Promise<void> {
        const {save} = LocalStorage();
        await save('user', JSON.stringify(user));
    }

    async getUser(): Promise<User> {
        const {getItem} = LocalStorage();
        const data = await getItem('user');
        const user: User = JSON.parse(data as any);
        return user;
    }

    async signOff(): Promise<void> {
        const {signOff} = LocalStorage();
        await signOff('user');
    }
}