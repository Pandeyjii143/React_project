import { useContext } from "react";
import styles from "./welcome.module.css";
import { TodoItemContext } from "../store/todo_item_store";
const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};
export default WelcomeMsg;
