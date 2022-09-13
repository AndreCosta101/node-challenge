declare namespace Express {
    export interface Request {
        user: {
           _id: Types.ObjectId; 
           name: string;
           email: string;
           password: string;
        },
        userFoundById: {
            _id: Types.ObjectId; 
            name: string;
            email: string;
            password: string;
        },
        id: string;
        post: {
            title: string;
            body: string;
            tags: string[];
            createdAt: Date;
        }
    }
}