import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const CreateDevice = () => {
    return (
        <Form>
            <FormControl
                placeholder={'Введите название девайса'}    
            >         
            </FormControl>    
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4'>Добавать новый девайс</Button>
            </div>
        </Form>
    );
};

export default CreateDevice;