import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoCompo from "./components/TodoCompo";
import WelcomeMsg from "./components/welcomeMsg";
import TodoItemContextProvider from "./store/todo_item_store";

function App() {
  return (
    <TodoItemContextProvider>
      <center class="todo-content">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoCompo />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
