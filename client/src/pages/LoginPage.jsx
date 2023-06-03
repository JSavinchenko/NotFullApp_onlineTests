import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginUser } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { status } = useSelector(state => state.auth)
    const isAuth = useSelector(checkIsAuth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        debugger
        if (status) toast(status)
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form className='m-5 p-5 border bg-light' onSubmit={e => e.preventDefault()}>
            <Form.Text style={{ fontSize: 30 }}>Авторизация</Form.Text>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label className='mt-2'>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Введите email...'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
                <Form.Label className='mt-2'>Пароль</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Введите пароль...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant='success' type='submit' className='mt-3' onClick={handleSubmit}>
                Войти
            </Button>
            <a style={{ fontSize: 15, marginLeft: 10, paddingTop: 15 }} className='text-primary' href='/register'>
                Нет аккаунта?
            </a>
        </Form>
    )
}
