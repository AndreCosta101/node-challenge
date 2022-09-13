import { Request, Response } from 'express';
import Post from '../../models/schemas/Post';

class CreatePostController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { title, body, tags } = request.body;
            console.log('HANDLE', title, body, tags)

            if (!title || !body) return response.status(400).send({message: 'Title and body are mandatory'});

            console.log(Post)
            const post = await Post.create({
                title, 
                body, 
                tags 
            })

            console.log('POST => ', post)

            if(!post) return response.status(400).send({message: 'Error creating post'})

            return response.status(200).json(post)
            
        } catch (err) {
            return response.status(500)
            // .send({ message: err.message})
        }
    }
}

export { CreatePostController }