function TodoItem1() {
  let todoName = "Buy milk";
  let todoDate = "8/07/2026";
  return (
    <div class="row mrow">
      <div class="col-6">{todoName}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-success mbtn">
          delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem1;
