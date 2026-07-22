import TodoItem from "./TodoItem";
import styles from "./TodoCompo.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo_item_store";

const TodoCompo = () => {
  const { todoItems } = useContext(TodoItemContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item, index) => (
          <TodoItem key={index} todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
};
export default TodoCompo;
