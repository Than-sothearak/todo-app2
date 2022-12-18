import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  
  const AddTask = text => {
    setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        num: this.state.items.length +1,
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
