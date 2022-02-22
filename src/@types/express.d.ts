import { User } from "../midlewares/modelsMiddlewares/user/user";

declare module 'express-serve-static-core' {
    interface Request {
        user?: User
    }
}