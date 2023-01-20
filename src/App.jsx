import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Container, Col } from 'react-bootstrap';
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
    <>
      {isLd && (
      <>
        <h1 className="text-center text-success my-5">Случайные факты о котиках</h1>
        <Container fluid>
          <Row xs={1} md={5}>
            {factsLs.map(({ id, text }) => (
              <Col key={id}>
                <Card text={text} id={id} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
      )}
      {!isLd && (
      <h1 className="text-center text-danger my-5">
        Ошибка загрузки. Попробуйте перезагрузить страницу.
      </h1>
      )}
    </>
  );
};

export default App;
