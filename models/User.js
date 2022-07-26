import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    email: String,
    password: String,
    createdAt : {
        type: Date,
        default: new Date()
    },


});

const userList = mongoose.model('userList', userSchema);

export default userList;