import {
  Card, Button, Col, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/factsSlice';
// import image from '../assets/cat1.jpeg';

const CardItem = ({ text, id }) => {
  const dispatch = useDispatch();
  const { likeStatus, img } = useSelector(({ facts }) => {
    const curFact = facts.factsList.find((fact) => id === fact.id);
    const { isLike, image } = curFact;
    return { likeStatus: isLike, img: image };
  });

  return (
    <Card className="mb-2 h-75">
      <Card.Img variant="top" src={img} />
      <Card.Body className="overflow-scroll h-50">
        <Card.Title>Случайный факт о котиках</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row className="mb-2">
          <Col>
            <Button
              variant={likeStatus ? 'success' : 'secondary'}
              onClick={() => dispatch(actions.switchLike({ id, isLike: !likeStatus }))}
            >
              Нравится
            </Button>
          </Col>
          <Col>
            <Button onClick={() => dispatch(actions.removeFact(id))}>
              Удалить факт
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardItem;
