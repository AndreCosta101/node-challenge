import { Request, Response } from 'express';
import Post from '../../models/schemas/Post';

class DeletePostController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request;
            await Post.findByIdAndDelete(id);
            return response.status(200).send({message: 'Post deleted successfully'})
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { DeletePostController }