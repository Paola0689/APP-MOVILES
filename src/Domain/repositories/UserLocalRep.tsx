import {User} from '../entity/User';

export interface UserLocalRep{
    save(user: User): Promise<void>;
    getUser(): Promise<User>;
    signOff(): Promise<void>;
}