import React, { useContext } from 'react';
import { Context } from '../index';
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';




const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="light" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className='navbar-logo'>Online Store</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant='outline-secondary'>Панель Администратора</Button>
                        <Button variant='outline-secondary' className='ms-3'>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant='outline-secondary' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;