import { Request, Response } from 'express';

class ShowPostController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {post} = request; 
            return response.status(200).json(post)
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { ShowPostController }