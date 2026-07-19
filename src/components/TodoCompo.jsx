import TodoItem from "./TodoItem";
import styles from "./TodoCompo.module.css";

const TodoCompo = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.name}
            todoDate={item.date}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};
export default TodoCompo;
