import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onClick}>
      {props.children}
    </li>
  );
};

export default TodoItem;
