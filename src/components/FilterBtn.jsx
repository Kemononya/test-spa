import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/factsSlice';

const FilterBtn = () => {
  const dispatch = useDispatch();
  const isFilter = useSelector(({ facts }) => facts.isFilter);

  return (
    <div className="text-center my-4">
      <Button
        variant="info"
        onClick={() => dispatch(actions.switchFilter(!isFilter))}
      >
        {!isFilter && 'Показать только понравившиеся'}
        {isFilter && 'Показать все'}
      </Button>
    </div>
  );
};

export default FilterBtn;
