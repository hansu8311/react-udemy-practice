import Todo from "../models/todo";
import TodoItem from "./TodoItem";

interface TodosProps {
  items: Todo[];
}

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <TodoItem key={todo.id}>{todo.text}</TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
