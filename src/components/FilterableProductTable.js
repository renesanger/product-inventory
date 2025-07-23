import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="centered">
      <div>
        <SearchBar
          filterText={filterText}
          inStock={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </div>
  );
}
