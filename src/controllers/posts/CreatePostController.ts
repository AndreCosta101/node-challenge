import { Request, Response } from 'express';
import Post from '../../models/schemas/Post';

export class CreatePostController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { title, body, tags } = request.body;

            if (!title || !body) return response.status(400).send({message: 'Title and body are mandatory'});

            const post = await Post.create({
                title, 
                body, 
                tags 
            })

            if(!post) return response.status(400).send({message: 'Error creating post'})

            return response.status(201).json(post)
            
        } catch (err) {
            return response.status(500).send({ message: err.message})
        }
    }
}

export default CreatePostController;