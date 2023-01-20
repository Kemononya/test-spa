import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/factsSlice';
import image from '../assets/cat1.jpeg';

const CardItem = ({ text, id }) => {
  const dispatch = useDispatch();

  return (
    <Card className="mb-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Случайный факт о котиках</Card.Title>
        <Button onClick={() => dispatch(actions.removeFact(id))}>Удалить факт</Button>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
