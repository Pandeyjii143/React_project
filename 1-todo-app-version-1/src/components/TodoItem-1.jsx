function TodoItem1() {
  let todoName = "Buy milk";
  let todoDate = "8/07/2026";
  return (
    <div className="row mrow">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-success mbtn">
          delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem1;
