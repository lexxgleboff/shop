import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const CreateType = () => {
    return (
        <Form>
            <FormControl
                placeholder={'Введите название типа'}    
            >         
            </FormControl>    
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4'>Добавать новый тип</Button>
            </div>
        </Form>
    );
};

export default CreateType;