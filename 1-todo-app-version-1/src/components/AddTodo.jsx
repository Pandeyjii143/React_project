function AddTodo() {
  return (
    <div className="row mrow">
      <div className="col-6">
        <input type="text" placeholder="enter todo here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success mbtn">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
