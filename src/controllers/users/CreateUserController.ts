import { Request, Response } from 'express';
import User from '../../models/schemas/User';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password } = request.body;

            if (!name || !email || !password) return response.status(400).send({message: 'Name, email and password are mandatory'});

            const userAlreadyExists = await User.findOne({email});

            if(userAlreadyExists) return response.status(400).send({message: 'User already exists'});

            const user = await User.create({
                name, 
                email, 
                password 
            })

            if(!user) return response.status(400).send({message: 'Error creating User'})
            user.password = '[SECRET]';
            return response.status(201).json(user)
            
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { CreateUserController }