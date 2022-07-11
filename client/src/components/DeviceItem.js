import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';


const DeviceItem = ({ device }) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='mt-3'>
            <Card style={{ width: 150, cursor: 'pointer', border: 'none'}} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)} >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}>

                </Image>
                <div className='mt-2'>
                    <div className='text-black-50'>fufuy</div>
                    <div>{device.name}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;