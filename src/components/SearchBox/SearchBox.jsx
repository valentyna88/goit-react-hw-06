import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.wrapper}>
      <label>Find contacts by name</label>
      <input
        className={css.field}
        type="text"
        value={value}
        onChange={event => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
