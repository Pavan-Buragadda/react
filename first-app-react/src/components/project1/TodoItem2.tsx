export function Todoitem2() {
  let todoItem = "Goto Office";
  let todoDate = "17/12/2024";
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
