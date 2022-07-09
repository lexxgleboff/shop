import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-4'>
            <Row>
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={process.env.REACT_APP_API_URL + device.img}
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
                    {device.info.map((info, index) =>
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