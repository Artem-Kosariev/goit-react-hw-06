import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice'; 

function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  function onFilter(e) {
    dispatch(changeFilter(e.target.value));
  }
   
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}

export default SearchBox;
