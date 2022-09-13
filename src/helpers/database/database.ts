import mongoose from 'mongoose';

const connectDB =  () =>{
    mongoose.connect(
        'mongodb+srv://andre-challenge:Mplg8nwcYsp8yBS7@cluster0.58viw35.mongodb.net/?retryWrites=true&w=majority'
        )
        .then(() => console.log('MongoDB Atlas is on!'))
        .catch((error) => console.log(error))
    
}

export {connectDB}