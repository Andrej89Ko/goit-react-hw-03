import { useId } from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();
  return (
    <div className={s.search}>
      <label htmlFor={searchId} className={s.label}>
        <span className={s.name}>Find contacts by name:</span>
        <input
          className={s['search-input']}
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
          id={searchId}
        />
      </label>
    </div>
  );
};

export default SearchBox;
