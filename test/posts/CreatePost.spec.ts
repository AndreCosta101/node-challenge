import { CreatePostController } from "../../src/controllers/posts/CreatePostController";
import { Request, Response } from 'express';
// import mockingoose from 'mockingoose';
const mockingoose = require('mockingoose');
import Post from '../../src/models/schemas/Post';

jest.setTimeout(10000)

describe('Create Post', () => {

        it('should be able to create a post', async (done) => {
            const post = {
                    title: 'XXX',
                    body: 'body',
                    tags: []
            }
            mockingoose(Post).toReturn(post, 'create')

            const mockRequest = {
                body : {
                    title: 'RAFA',
                    body: 'body',
                    tags: []
                }
            } as Request;
    
            const mockResponse: any = {
                json: jest.fn(),
                status: jest.fn(),
              } as unknown as Response;

            const createPostController = new CreatePostController();
                
            const response = await createPostController.handle(mockRequest, mockResponse)
            

            // expect(response).toContain({
            //     title: 'XXX',
            //     body: 'body',
            //     tags: []
            // })
            done()
        
        })
    
})