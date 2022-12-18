import Todo from "./components/Todo";
import { useState } from "react";
import  {TodoList}  from "../src/components/TodoList";


function App() {
  const [items, setItems] = useState([]);
  
  const AddTask = text => {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        num: items.length +1,
        text: text,
        isComplete: false
      }
    ]);
  }
  return (
    <div className="todo-main">
     <Todo onAdd={AddTask}/>
     <TodoList />
    </div>
  );
}

export default App;
