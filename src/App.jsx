import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Container, Col } from 'react-bootstrap';
import Card from './components/Card';
import { fetchFacts } from './slices/factsSlice';
import FilterBtn from './components/FilterBtn';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);

  const { factsLs, isLd, isFlt } = useSelector(({ facts }) => {
    const { factsList, isLoading, isFilter } = facts;
    return { factsLs: factsList, isLd: isLoading, isFlt: isFilter };
  });

  return (
    <>
      {isLd && (
      <>
        <h1 className="text-center text-success mt-5">Случайные факты о котиках</h1>
        <FilterBtn />
        <Container fluid>
          <Row xs={1} md={5}>
            {!isFlt && factsLs.map(({ id, text }) => (
              <Col key={id}>
                <Card text={text} id={id} />
              </Col>
            ))}
            {isFlt && factsLs
              .filter(({ isLike }) => isLike)
              .map(({ id, text }) => (
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
