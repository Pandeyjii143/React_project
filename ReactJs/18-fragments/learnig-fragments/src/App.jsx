import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItem, setFoodItems] = useState(["Dal", "Green Vegetables", "roti"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItem = [...foodItem, newFoodItem];
      setFoodItems(newItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItem items={foodItem} />
        <ErrorMessage items={foodItem} />
      </Container>
    </>
  );
}
export default App;
