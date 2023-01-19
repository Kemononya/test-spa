import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './slices/factsSlice';
import routes from './routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFacts = async () => {
      const response = await axios.get(routes.tenFactsPath());
      dispatch(actions.addFacts(response.data));
    };
    fetchFacts();
  }, [dispatch]);

  const factsList = useSelector(({ facts }) => facts.factsList);
  console.log(factsList);

  return (
    <div>
      {factsList.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
};

export default App;
