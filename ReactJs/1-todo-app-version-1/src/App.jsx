import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem-1";
import TodoItem2 from "./components/TodoItem-2";
import "./App.css";
function App() {
  return (
    <center className="todo-content">
      <AppName />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;
