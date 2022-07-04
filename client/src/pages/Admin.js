import React from 'react';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import {Row, Nav, TabContainer, Col, NavLink, NavItem, TabContent, TabPane, Container} from 'react-bootstrap'

const Admin = () => {
    return (
        <Container className='mt-3'>
            <TabContainer id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <NavItem>
                            <NavLink eventKey="first">Добавить тип</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="second">Добавить бренд</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="third">Добавить устройство</NavLink>
                        </NavItem>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <TabContent>
                        <TabPane eventKey="first">
                            <CreateType></CreateType>
                        </TabPane>
                        <TabPane eventKey="second">
                            <CreateBrand></CreateBrand>
                        </TabPane>
                        <TabPane eventKey="third">
                            <CreateDevice></CreateDevice>
                        </TabPane>
                    </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </Container>
    );
};

export default Admin;