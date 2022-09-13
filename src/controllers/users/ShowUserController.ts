import { Request, Response } from 'express';

class ShowUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {userFoundById} = request;// apesar de ser em apenas uma rota, coloquei apenas para exemplificar a implementação.
            return response.status(200).json(userFoundById)
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { ShowUserController }