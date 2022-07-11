import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = () => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({ name: value }).then(data => {
            setValue('')
        })
    }

    return (
        <Form>
            <FormControl
                placeholder={'Введите название бренда'} 
                value={value}
                onChange={e => setValue(e.target.value)}
            >         
            </FormControl>    
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4' onClick={addBrand}>Добавать новый бренд</Button>
            </div>
        </Form>
    );
};

export default CreateBrand;