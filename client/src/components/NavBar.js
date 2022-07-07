import React, { useContext } from 'react';
import { Context } from '../index';
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';




const NavBar = observer( () => {
    const { user } = useContext(Context)
    const navigate = useNavigate() 
    return (
        <Navbar bg="light" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className='navbar-logo'>Online Store</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant='outline-secondary' onClick={() => navigate(ADMIN_ROUTE)}>Панель Администратора</Button>
                        <Button variant='outline-secondary' className='ms-3' onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant='outline-secondary' onClick={() => navigate(REGISTRATION_ROUTE)}>Регистрация</Button>
                        <Button variant='outline-secondary' className='ms-3' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;