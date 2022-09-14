import { Request, Response } from 'express';
import Post from '../../models/schemas/Post';

interface IQuery{
    page: number;
    limit: number;
}

class ListPostController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { page = 1, limit=2} = request.query as Partial<IQuery>;
            const posts = await Post.find().limit(limit as number * 1).skip((page - 1) ).exec();

            const count = await Post.countDocuments();

            if(posts.length === 0) return response.status(400).send({message: 'No posts found'})
            return response.status(200).json({
                posts,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            })
        } catch (error) {
            return response.status(500).send({ message: error.message})
        }
    }

}

export { ListPostController }