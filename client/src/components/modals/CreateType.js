import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

const CreateType = () => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({ name: value }).then(data => {
            setValue('')
        })
    }

    return (
        <Form>
            <FormControl
                placeholder={'Введите название типа'}  
                value={value}
                onChange={e => setValue(e.target.value)}
            >         
            </FormControl>    
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4' onClick={addType}>Добавать новый тип</Button>
            </div>
        </Form>
    );
};

export default CreateType;