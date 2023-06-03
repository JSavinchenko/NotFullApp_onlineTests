import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { getMe } from './redux/features/auth/authSlice.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

import { MainPage, RegisterPage, LoginPage } from './pages'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='login' element={<LoginPage />} />
            </Routes>
            <ToastContainer position='bottom-right' />
        </Layout>
    )
}

export default App
