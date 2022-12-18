import Todo from "./components/Todo";
import { useState } from "react";

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
    <div className="App">
     <Todo onAdd={AddTask}/>
    </div>
  );
}

export default App;
