import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

function App() {
  const products = [
    { category: "Fruits", name: "Apple", price: 1, stocked: true },
    { category: "Fruits", name: "Banana", price: 3, stocked: true },
    { category: "Fruits", name: "Mango", price: 2, stocked: false },
    { category: "Vegetable", name: "Kale", price: 1, stocked: true },
    { category: "Vegetable", name: "Spinach", price: 2, stocked: false },
    { category: "Vegetable", name: "Brocolli", price: 2, stocked: true },
  ];

  return (
    <div className="App">
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
