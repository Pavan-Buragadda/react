export function TODOAPPBody() {
  return (
    <div className="container">
      <div className="row pav-row">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO Here"></input>
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success pav-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
