import { MdDelete } from "react-icons/md";
function TodoItem({todoName,todoDate,delInArray}) {

  return (
    <div className="container kg-row">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=>delInArray(todoName,todoDate)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
} 

export default TodoItem;