import mongoose from 'mongoose';

const User = mongoose.Schema({
    nama:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    }
});

export default mongoose.model("User",User)