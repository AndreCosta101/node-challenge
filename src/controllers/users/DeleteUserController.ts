import { Request, Response } from 'express';
import User from '../../models/schemas/User';

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            await User.findByIdAndDelete(id);
            return response.status(200).send({message: 'User deleted successfully'}) 
            
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { DeleteUserController }