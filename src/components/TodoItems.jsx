import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

let TodoItems = ({ todoItemsarr ,delInArray}) => {
  return (

    <div  className={styles.itemsContainer}>
        
      {todoItemsarr.map((obj) =>(
        <TodoItem key={obj.name} todoName={obj.name} todoDate={obj.dueDate} delInArray={delInArray}/>
      ))}

    </div>

  );
};
export default TodoItems;
