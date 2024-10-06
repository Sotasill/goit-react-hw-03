import css from './Searchbox.module.css'

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.wrapper}>
      <label htmlFor="search" className={css.label}>Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Enter to search"
        className={css.input}
        
      ></input>
    </div>
  );
}

export default SearchBox;
