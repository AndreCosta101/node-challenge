import { CreatePostController } from "../../src/controllers/posts/CreatePostController";
import { getMockReq, getMockRes } from '@jest-mock/express'

jest.mock('mongoose')
jest.mock('express')


const reqSucceed = getMockReq({ body: { title: 'título', body: 'conteúdo', tags: [] } })
const reqError = getMockReq({ body: { tags: [] } })
const { res, next, clearMockRes } = getMockRes()

describe('Create Post', () => {
    let createPostController: CreatePostController

    beforeEach(()=>{
        createPostController = new CreatePostController()
    })

    it('should be defined', () => {
        expect(createPostController).toBeDefined()
    })

    describe('CreatePostController handle method', () => {
        
        it('should have handle method ', () => {
            expect(createPostController.handle).toBeDefined()
        })

        it('should be able to create a post', () => {
            const postSpy = jest.spyOn(createPostController, 'handle')

            createPostController.handle(reqSucceed, res)

            expect(postSpy).toHaveBeenCalled()
        })


        it('should return an error if some of the mandatory parameters is missing', () => {
            try {
                createPostController.handle(reqError, res)
            } catch (error) {
                expect(error).toThrowError()
            }
        })
    })
})