import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import Card from './components/Card';
import { fetchFacts } from './slices/factsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);

  const { factsLs, isLd } = useSelector(({ facts }) => {
    const { factsList, isLoading } = facts;
    return { factsLs: factsList, isLd: isLoading };
  });

  return (
    <Container fluid>
      {isLd && (
      <Row xs={1} md={5}>
        {factsLs.map(({ _id, text }) => (
          <Col key={_id}>
            <Card text={text} key={_id} />
          </Col>
        ))}
      </Row>
      )}
      {!isLd && <h1>Ошибка загрузки. Перезагрузите страницу</h1>}
    </Container>
  );
};

export default App;
