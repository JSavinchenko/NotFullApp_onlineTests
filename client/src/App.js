import Layout from './components/Layout.jsx'
import {Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './redux/features/auth/authSlice.js'

import MainPage from './pages/MainPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import TestsPage from './pages/TestsPage.jsx'
import TestPage from './pages/TestPage.jsx'
import UsersTestsPage from './pages/UsersTestsPage.jsx'
import CreateTestPage from './pages/CreateTestPage.jsx'
import ResultTestPage from './pages/ResultTestPage.jsx'

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
        <Route path='tests' element={<TestsPage />} />
        <Route path=':id' element={<TestPage />} />
        <Route path='userstests' element={<UsersTestsPage />} />
        <Route path='create' element={<CreateTestPage />} />
        <Route path='result' element={<ResultTestPage />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </Layout>
  );
}

export default App;
