import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const AddTask = () => {

  }
  return (
    <div className="App">
     <Todo />
    </div>
  );
}

export default App;
