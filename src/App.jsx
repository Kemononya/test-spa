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

  const { factsLs, loadStatus, isFlt } = useSelector(({ facts }) => {
    const { factsList, loadingStatus, isFilter } = facts;
    return { factsLs: factsList, loadStatus: loadingStatus, isFlt: isFilter };
  });

  return (
    <>
      {loadStatus === 'idle' && (
      <>
        <h1 className="text-center text-success mt-5">Случайные факты о котиках</h1>
        <FilterBtn />
        <Container fluid style={{ height: '100vh' }}>
          <Row xs={1} md={5} className="h-100">
            {!isFlt && factsLs.map(({ id, text }) => (
              <Col key={id} className="h-100">
                <Card text={text} id={id} />
              </Col>
            ))}
            {isFlt && factsLs
              .filter(({ isLike }) => isLike)
              .map(({ id, text }) => (
                <Col key={id} className="h-100">
                  <Card text={text} id={id} />
                </Col>
              ))}
          </Row>
        </Container>
      </>
      )}
      {loadStatus === 'failed' && (
      <h1 className="text-center text-danger my-5">
        Ошибка загрузки. Попробуйте перезагрузить страницу.
      </h1>
      )}
      {loadStatus === 'loading' && (
      <h1 className="text-center my-5">
        Идёт загрузка. Подождите.
      </h1>
      )}
    </>
  );
};

export default App;
