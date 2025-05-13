import React, { useState } from "react";
import Todo from "../models/todo";

interface TodosContextObj {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  function addTodoHandler(text: string) {
    setTodos((prevState) => [...prevState, new Todo(text)]);
  }
  function removeTodoHandler(id: string) {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  }
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
