import { MdDeleteSweep } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo_item_store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className="row mrow">
      <div class="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success mbtn"
          onClick={() => deleteItem(todoName)}
        >
          <MdDeleteSweep />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
