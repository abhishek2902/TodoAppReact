import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import IfEmpty from "./components/IfEmpty";

function App() {

  const [toDoItems,setToDoItem]=useState([]);

  let addInArray=(x,y)=>{
    //let newArr=[...toDoItems,{name:x,dueDate:y}];
    // setToDoItem(newArr)
    
    //update state from previous state to avoid stale values using asyn updates
    setToDoItem((currValue)=>[...currValue,{name:x,dueDate:y}]);
  }
  let delInArray=(x,y)=>{
    let newArr=toDoItems.filter((obj)=>(obj.name!==x)  
    )
    setToDoItem(newArr)
  }
  
  
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addInArray={addInArray}
      />
      {toDoItems.length===0 && <IfEmpty/>}
      <TodoItems todoItemsarr={toDoItems} delInArray={delInArray}/>
    </center> 
  );
}

export default App;