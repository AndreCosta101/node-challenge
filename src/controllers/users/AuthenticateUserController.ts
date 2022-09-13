import { Request, Response } from 'express';
import User from '../../models/schemas/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body;

            const user =  await User.findOne({ email }).select('+password').exec();

            if(!user) {
                return response.status(400).send({message: ' Incorrect email and/or password.'})
            } 

            const passwordMatch = await compare(password, user.password)

            if(!passwordMatch){
                return response.status(400).send({message: ' Incorrect email and/or password.'})
            }
            
            const token = sign({}, '03d79782d9bf413c1048a8003c1ef128', {
                subject: user.id,
                expiresIn: '1d'
            })         
            
            const tokenResponse = {
                token,
                user: {
                    name: user.name,
                    email: user.email
                }
            }

            return response.status(200).json(tokenResponse)
            
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { AuthenticateUserController }