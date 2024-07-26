import { useState,useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({addInArray}) {
  
  const todoNameElement=useRef();
  const todoDateElement=useRef();
  
  const handleButtonClick=(e)=>{
    e.preventDefault();
    let todoName=todoNameElement.current.value;
    let todoDate=todoDateElement.current.value;
    todoNameElement.current.value='';
    todoDateElement.current.value='';
    addInArray(todoName,todoDate); 
  }

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleButtonClick}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here"ref={todoNameElement}/>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement}/>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success  kg-button">
          <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
