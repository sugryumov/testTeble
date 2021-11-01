import { useDispatch } from 'react-redux';
import { EFilterActionTypes } from '../../../constants';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './index.scss';

export const TableFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: EFilterActionTypes.IS_ACTIVE_USER,
      payload: event.target.checked,
    });
  };

  const { isActive } = useTypedSelector((state) => state.filter);

  return (
    <div className="filter">
      <label className="filter_isActive-label">
        Filterd active users
        <input
          type="checkbox"
          className="filter_isActive-input"
          onChange={handleOnChange}
          checked={isActive}
        />
      </label>
    </div>
  );
};
