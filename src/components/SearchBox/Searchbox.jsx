function SearchBox({ value, onFilter }) {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        
      ></input>
    </div>
  );
}

export default SearchBox;
