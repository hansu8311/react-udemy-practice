import { useContext } from "react";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

interface TodosProps {}

const Todos: React.FC<TodosProps> = (props) => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          onClick={() => {
            removeTodo(todo.id);
          }}
        >
          {todo.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
