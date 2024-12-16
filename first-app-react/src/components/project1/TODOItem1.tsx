export function TodoItem1() {
  let todoItem = "Buy Milk";
  let todoDate = "12/16/2025";
  return (
    <div className="container">
      <div className="row pav-row">
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger pav-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
