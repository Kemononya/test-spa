import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../assets/cat1.jpeg';

const CardItem = ({ text }) => (
  <Card className="mb-2">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>Случайный факт о котиках</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default CardItem;
