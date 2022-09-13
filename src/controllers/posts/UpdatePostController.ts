import { Request, Response } from 'express';
import Post from '../../models/schemas/Post';

class UpdatePostController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { title, body, tags } = request.body;
            const {id} = request;
            if(!title && !body && !tags){
                return response.status(400).send({message: 'Submit fields for updating post'});
            }
            await Post.findOneAndUpdate(
                {_id: id}, 
                { title, body, tags}
                )              
            const updatedPost = await Post.findById(id)
            return response.status(200).json(updatedPost)

        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }
}

export { UpdatePostController }