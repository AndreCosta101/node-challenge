import { Request, Response } from 'express';
import Post from '../../models/schemas/Post';

class ListPostController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const posts = await Post.find();
            if(posts.length === 0) return response.status(400).send({message: 'No posts found'})
            return response.status(200).json(posts)
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }

}

export { ListPostController }