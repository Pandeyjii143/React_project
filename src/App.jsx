import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoCompo from "./components/TodoCompo";
import { useState } from "react";
import WelcomeMsg from "./components/welcomeMsg";

function App() {
  const [todoItems, setItems] = useState([]);

  const handleNewItem = (itemName, itemDeuDate) => {
    setItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        date: itemDeuDate,
      },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    setItems(newTodoItem);
  };

  return (
    <center class="todo-content">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg />}

      <TodoCompo todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
