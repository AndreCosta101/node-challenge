import { Request, Response } from 'express';
import User from '../../models/schemas/User';

class ListUserController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const users = await User.find();
            if(users.length === 0) return response.status(400).send({message: 'No users were found'})
            return response.status(200).json(users)
            
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }

}

export { ListUserController }