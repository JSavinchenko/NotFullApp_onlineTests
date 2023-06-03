import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Button, Nav, Container } from 'react-bootstrap'

const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }

    return (
        <BootstrapNavbar bg='success' variant='dark'>
            <Container>
                <BootstrapNavbar.Brand href='/'>ЛОГО</BootstrapNavbar.Brand>
                {isAuth && (
                    <Nav className='me-auto'>
                        <NavLink to='/'>Главная</NavLink>
                        <NavLink to='/userstests'>Мои тесты</NavLink>
                    </Nav>
                )}
                {isAuth ? (
                    <Button variant='light' onClick={logoutHandler}>
                        Выйти
                    </Button>
                ) : (
                    <NavLink to='/login'>
                        <Button variant='light' onClick={() => console.log('Clicked')}>
                            Войти
                        </Button>
                    </NavLink>
                )}
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar
