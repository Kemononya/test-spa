import React from 'react';
import {
  Card, Button, Col, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/factsSlice';
import image from '../assets/cat1.jpeg';

const CardItem = ({ text, id }) => {
  const dispatch = useDispatch();
  const isLike = useSelector(({ facts }) => {
    const curFact = facts.factsList.find((fact) => id === fact.id);
    return curFact.isLike;
  });

  return (
    <Card className="mb-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Случайный факт о котиках</Card.Title>
        <Row className="mb-2">
          <Col>
            <Button
              variant={isLike ? 'success' : 'secondary'}
              onClick={() => dispatch(actions.changeLike({ id, isLike: !isLike }))}
            >
              Нравится
            </Button>
          </Col>
          <Col>
            <Button onClick={() => dispatch(actions.removeFact(id))}>Удалить факт</Button>
          </Col>
        </Row>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
