import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  function addTodoHandler(text: string) {
    setTodos((prevState) => [...prevState, new Todo(text)]);
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <Todos items={todos} />
    </div>
  );
}

export default App;
