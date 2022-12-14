import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

export default mongoose.model('Post', Post);