import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    tests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Test'
        }
    ],
    usersResults: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UsersResult'
        }
    ]
})

export default mongoose.model('User', UserSchema)