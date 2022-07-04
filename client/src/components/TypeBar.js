import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type => 
                <ListGroup.Item
                    action variant="light"
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;