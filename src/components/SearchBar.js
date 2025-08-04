export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  function handleTextChange(e) {
    onFilterTextChange(e.target.value);
  }
  function handleCheckboxChange(e) {
    onInStockOnlyChange(e.target.checked);
  }
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={handleTextChange}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />{" "}
        Only show items in stock
      </label>
    </form>
  );
}
