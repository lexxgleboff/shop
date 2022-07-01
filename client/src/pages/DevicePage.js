import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const DevicePage = () => {
    const device = { id: 1, name: 'Iphone 12 pro', price: 30000, img: '../server/static/e830205b-c917-4978-a104-ba7e0d989949.jpg' }
    const description = [
        {id:1, title: 'Оперативная память', description: '12Гб'},
        {id:1, title: 'Камера', description: '12Гб'},
        {id:1, title: 'Процессор', description: 'ARM'},
        {id:1, title: 'Кол-ядер', description: '4'},
        {id:1, title: 'Аккумулятор', description: '4200'},
    ]

    return (
        <Container className='mt-4'>
            <Row>
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={device.img}
                        className='rounded mx-auto d-block'
                    >

                    </Image>
                    <div className='d-flex justify-content-around align-items-center mt-2'>{device.name}
                        <h4>От: {device.price}руб.</h4>
                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                    </div>
                </Col>
                <Col md={4}>
                    {description.map((info, index) =>
                            <Row className='g-0' key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transporent', padding: 5}}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                        <Button variant={'outline-dark'} className='mt-3'>Добавить в корзину</Button>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;