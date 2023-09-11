import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Medal from './Medal';
import { TrashFill } from 'react-bootstrap-icons';

const Country = (props) => {
  const { country, medals, onIncrement, onDecrement, onDelete } = props;

  const getMedalsTotal = () => {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name]; });
    return sum;
  }

  return (
    <Card style={{width:"22rem"}} className='mx-auto'>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>
          { country.name }
          <Badge bg="secondary" text="light" pill className="ml-2">
            { getMedalsTotal() }
          </Badge>
          </span>
          <TrashFill onClick={() => onDelete(country.id)} className='icon-btn' style={{ color:'red' }} />
        </Card.Title>
        <ListGroup variant="flush">
        { medals.map(medal =>
          <ListGroup.Item className="d-flex justify-content-between" key={ medal.id }>
            <Medal  
              country={ country } 
              medal={ medal } 
              onIncrement={ onIncrement } 
              onDecrement={ onDecrement } />
          </ListGroup.Item>
        ) }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Country;
