
export interface User {
    id?:          string;
    name:         string;
    lastname:     string;
    phone:        string;
    email:        string;
    image?:       string;
    password:     string;
    confPassword: string;
    session_token?: string;
    roles?: Rol[];
}