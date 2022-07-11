import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';

const CreateDevice = observer(() => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0]);
    }
    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${ price }`)
        formData.append('img', file)
        formData.append('brandId', device.selectedType.id)
        formData.append('typedId', device.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then()
    }

    return (
        <Form>
            <Dropdown className='mb-2'>
                <DropdownToggle variant='outline-secondary'>{device.selectedType.name || 'Выберите тип'}</DropdownToggle>
                <DropdownMenu>
                    {device.types.map(type => 
                        <DropdownItem
                            key={type.id}
                            onClick={() => device.setSelectedType(type)}
                        >
                            {type.name}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
            <Dropdown className='mb-2'>
                <DropdownToggle variant='outline-secondary'>{device.selectedBrand.name || 'Выберите бренд'}</DropdownToggle>
                <DropdownMenu>
                    {device.brands.map(brand => 
                        <DropdownItem key={brand.id}
                            onClick={() => device.setSelectedBrand(brand)}
                        >
                            {brand.name}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
            <FormControl
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={'Введите название девайса'}
                className='mb-2'
            >         
            </FormControl>    
            <FormControl
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                placeholder={'Введите стоимость девайса'}
                type='number'
                className='mb-2'
            >         
            </FormControl>    
            <FormControl
                type='file'
                className='mb-2'
                onChange={selectFile}
            >         
            </FormControl>    
            <hr></hr>
            <Button variant='outline-secondary' onClick={addInfo}>Добавить новое свойство</Button>
            {info.map(i =>
                <Row className='mt-3' key={i.number}>
                    <Col md={4}>
                        <FormControl
                            placeholder='Введите название свойства'
                            value={i.title}
                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                        >

                        </FormControl>
                    </Col>
                    <Col md={4}>
                        <FormControl
                            placeholder='Введите описание свойства'
                            value={i.description}
                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                        >

                        </FormControl>
                    </Col>
                    <Col md={4}>
                        <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>Удалить</Button>
                    </Col>
                </Row>    
            )}
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4' onClick={addDevice}>Добавать новый девайс</Button>
            </div>
        </Form>
    );
});

export default CreateDevice;