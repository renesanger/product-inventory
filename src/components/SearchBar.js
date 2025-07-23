export default function SearchBar({
  filterText,
  inStockOnly,
  OnFilterTextChange,
  OnInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => {
          // OnFilterTextChange("helloooo");
          alert(e.target.value);
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => {
            alert("hello");
            OnInStockOnlyChange(e.target.checked);
          }}
        />{" "}
        Only show items in stock
      </label>
    </form>
  );
}
