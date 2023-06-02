import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import testSlice from './features/test/testSlice'
//import commentSlice from './features/comment/commentSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        test: testSlice
        //comment: commentSlice,
    },
})

export default store
