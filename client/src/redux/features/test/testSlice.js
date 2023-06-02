import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    tests: [],
    loading: false,
}

export const createTest = createAsyncThunk(
    'test/createTest',
    async (params) => {
        try {
            const { data } = await axios.post('/create', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {},
    extraReducers: {
        // Создание поста
        [createTest.pending]: (state) => {
            state.loading = true
        },
        [createTest.fulfilled]: (state, action) => {
            state.loading = false
            state.tests.push(action.payload)
        },
        [createTest.rejected]: (state) => {
            state.loading = false
        },
        /*// Получаение всех постов
        [getAllPosts.pending]: (state) => {
            state.loading = true
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload.posts
            state.popularPosts = action.payload.popularPosts
        },
        [getAllPosts.rejected]: (state) => {
            state.loading = false
        },
        // Удаление поста
        [removePost.pending]: (state) => {
            state.loading = true
        },
        [removePost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = state.posts.filter(
                (post) => post._id !== action.payload._id,
            )
        },
        [removePost.rejected]: (state) => {
            state.loading = false
        },
        // Обновление поста
        [updatePost.pending]: (state) => {
            state.loading = true
        },
        [updatePost.fulfilled]: (state, action) => {
            state.loading = false
            const index = state.posts.findIndex(
                (post) => post._id === action.payload._id,
            )
            state.posts[index] = action.payload
        },
        [updatePost.rejected]: (state) => {
            state.loading = false
        },*/
    },
})

export default testSlice.reducer