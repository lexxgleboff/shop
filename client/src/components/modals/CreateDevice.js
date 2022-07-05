import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Context } from '../..';

const CreateDevice = () => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Form>
            <Dropdown className='mb-2'>
                <DropdownToggle variant='outline-secondary'>Выберите тип</DropdownToggle>
                <DropdownMenu>
                    {device.types.map(type => 
                        <DropdownItem key={type.id}>{type.name}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
            <Dropdown className='mb-2'>
                <DropdownToggle variant='outline-secondary'>Выберите бренд</DropdownToggle>
                <DropdownMenu>
                    {device.brands.map(brand => 
                        <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
            <FormControl
                placeholder={'Введите название девайса'}
                className='mb-2'
            >         
            </FormControl>    
            <FormControl
                placeholder={'Введите название девайса'}
                type='number'
                className='mb-2'
            >         
            </FormControl>    
            <FormControl
                placeholder={'Введите название девайса'}
                type='file'
                className='mb-2'
            >         
            </FormControl>    
            <hr></hr>
            <Button variant='outline-secondary' onClick={addInfo}>Добавить новое свойство</Button>
            {info.map(i =>
                <Row className='mt-3' key={i.number}>
                    <Col md={4}>
                        <FormControl placeholder='Введите название свойства'>

                        </FormControl>
                    </Col>
                    <Col md={4}>
                        <FormControl placeholder='Введите описание свойства'>

                        </FormControl>
                    </Col>
                    <Col md={4}>
                        <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>Удалить</Button>
                    </Col>
                </Row>    
            )}
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4'>Добавать новый девайс</Button>
            </div>
        </Form>
    );
};

export default CreateDevice;