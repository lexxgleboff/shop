import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const CreateBrand = () => {
    return (
        <Form>
            <FormControl
                placeholder={'Введите название бренда'}    
            >         
            </FormControl>    
            <div className='d-flex justify-content-end'>
                <Button variant='outline-success' className='mt-4'>Добавать новый бренд</Button>
            </div>
        </Form>
    );
};

export default CreateBrand;