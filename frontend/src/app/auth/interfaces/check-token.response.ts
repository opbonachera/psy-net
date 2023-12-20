import { LoggedUser } from "./logged-user.interface";

export interface CheckTokenResponse {
    loggedUser: LoggedUser;
    token:      string;
}