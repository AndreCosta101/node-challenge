import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { verify } from 'jsonwebtoken';
import Post from '../../models/schemas/Post';
import User from '../../models/schemas/User';


export async function checkValidId(
    request: Request, 
    response:Response, 
    next:NextFunction) {
        const {id} = request.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return response.status(400).send({message: 'Invalid ID'});
        }

        request.id = id;

        next()
    }


export async function checkValidPost(
    request: Request, 
    response:Response, 
    next:NextFunction) {
        const {id} = request.params;

        const post = await Post.findById(id);

        if(!post) {
            return response.status(400).send({message: 'No post was found for this id'})
        }

        request.post = post;

        next()
    }

export async function checkValidUser(
    request: Request, 
    response:Response, 
    next:NextFunction) {
        const {id} = request.params;

        const userFoundById = await User.findById(id);

        if(!userFoundById) {
            return response.status(400).send({message: 'No user was found for this id'})
        }

        request.userFoundById = userFoundById;

        next()
    }

export async function ensureAuthentication(
    request: Request, 
    response:Response, 
    next:NextFunction ) {
        const authHeader = request.headers.authorization;

        if(!authHeader){
            return response.status(400).send({message: 'Auth token is missing'})
        }

        const [, token ] = authHeader.split(' ');

        try {
            const {sub : userId} = verify(token, '03d79782d9bf413c1048a8003c1ef128')

            const user = await User.findById(userId);


            if(!user) {
                return response.status(400).send({message: 'No user was found for this id'})
            }
    
            request.user = user;
            next()
        } catch (error) {
            return response.status(500).send({ message:  error.message})
        }
        

}