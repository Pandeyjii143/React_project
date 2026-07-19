import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameElements = useRef();
  const deuDateElements = useRef();

  const handleAddButtonChange = () => {
    event.preventDefault();
    const todoName = todoNameElements.current.value;
    const deuDate = deuDateElements.current.value;
    todoNameElements.current.value = "";
    deuDateElements.current.value = "";
    onNewItem(todoName, deuDate);
  };

  return (
    <form class="row mrow" onSubmit={handleAddButtonChange}>
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElements}
          placeholder="enter todo here"
        />
      </div>
      <div className="col-4">
        <input type="date" ref={deuDateElements} />
      </div>
      <div class="col-2">
        <button type="submit" class="btn btn-success mbtn">
          <BiMessageAdd />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
