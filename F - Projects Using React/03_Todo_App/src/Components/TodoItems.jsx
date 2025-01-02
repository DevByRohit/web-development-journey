function TodoItems() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-4 text-left" id="todo-name">
          Buy Milk
        </div>
        <div class="col-4" id="todo-date">
          11/24/2024
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-outline-danger" id="dlt-btn">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
