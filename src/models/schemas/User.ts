import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },  
    createdAt: {
        type: Date,
        default: Date.now
    }
})

User.pre('save', async function(next){
    this.password = await bcryptjs.hash(this.password, 10)
    next()
})

export default mongoose.model('User', User);