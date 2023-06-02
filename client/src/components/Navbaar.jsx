import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';

const Navbaar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }
    
    return (
    <Navbar bg="success" variant="dark" style={{zIndex:-2}}>
        <Container>
            <Navbar.Brand href="/">ЛОГО</Navbar.Brand>
            {isAuth && (
                <Nav className="me-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/userstests">Мои тесты</Nav.Link>    
                </Nav>
            )}
            {isAuth ? (
                <Button variant="light" onClick={logoutHandler}>Выйти</Button>
            ) : (
                <Nav.Link href="/login"><Button variant="light">Войти</Button></Nav.Link>  
            )}
            
        </Container>
    </Navbar>
  );
}

export default Navbaar