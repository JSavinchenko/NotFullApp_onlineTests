import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dateOfCreation: {
        type: Date,
        default: Date.now
    },
    statuss: {
        type: String,
        enum: ['Закрытый', 'Открытый'],
        default: 'Закрытый'
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
    results: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Result' 
        }
    ]
})

export default mongoose.model('Test', TestSchema)