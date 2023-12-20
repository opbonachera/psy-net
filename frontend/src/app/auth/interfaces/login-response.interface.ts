import { LoggedUser } from "./logged-user.interface";

export interface LoginResponse {
    loggedUser: LoggedUser;
    token:      string;
}

