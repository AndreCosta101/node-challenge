import { Request, Response } from 'express';
import User from '../../models/schemas/User';

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email } = request.body;
            const {id} = request.params;

            if(!name && !email){
                return response.status(400).send({message: 'Submit fields for updating user'});
            }
            await User.findOneAndUpdate(
                {_id: id}, 
                { name, email}
                )    
            const updatedUser = await User.findById(id)
            return response.status(200).json(updatedUser)

        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { UpdateUserController }