import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC<{}> = (props) => {
  const { addTodo } = useContext(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textRef.current?.value;

    if (enteredText && enteredText.trim().length > 0) {
      addTodo(enteredText);
    } else {
      //thorw an error
      return;
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
