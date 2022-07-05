import React, { useContext, useState } from 'react';
import { Button, Dropdown, Form, FormControl } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Context } from '../..';

const CreateDevice = () => {
    const { device } = useContext(Context)
    // const [info, setInfo] = useState([])
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
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4'>Добавать новый девайс</Button>
            </div>
        </Form>
    );
};

export default CreateDevice;