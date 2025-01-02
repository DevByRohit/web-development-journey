function AddTodo() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-4 text-left">
          <input type="text" placeholder="Enter Todo Here" id="task-area"/>
        </div>
        <div class="col-4">
          <input type="date" id="date-picker"/>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-outline-success" id="add-btn">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
