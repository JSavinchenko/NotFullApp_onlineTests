import Test from '../models/Test.js'
import User from '../models/User.js'

//Create test
export const createTest = async (req, res) => {
    try{
        const {name} = req.body
        const user = await User.findById(req.userId)  //? нужно

        const newTest = new Test({
            name,
            //description,
            dateOfCreation: Date.now,  //?
            statuss: 'Закрытый',  //?
            author: req.userId
        })
        await newTest.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: { tests: newTest}
        })
        return res.json(newTest)
    } catch(error) {
        res.json({message: 'Что-то пошло не так...'})
    }
}