import { User } from "modules/user/interfaces/user.interface";

export interface AuthenticatedRequest extends Express.Request {
    user: User
}
