import { MdDeleteSweep } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="row mrow">
      <div class="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success mbtn"
          onClick={() => onDeleteClick(todoName)}
        >
          <MdDeleteSweep />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
