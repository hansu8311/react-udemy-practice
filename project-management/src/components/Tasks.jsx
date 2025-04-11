import React from "react";
import CustomInput from "./CustomInput";

function Tasks({ item, task }) {
  return (
    <section className="flex flex-col gap-2 px-2">
      <div className="">
        <p>{item.tit}</p>
        <button className="ml-auto" onClick={() => {}}>
          Delete
        </button>
      </div>
      <p>{item.date}</p>
      <p>{item.des}</p>
      <div>
        <p>Tasks</p>
        <p>
          <CustomInput></CustomInput> <button>Add Task</button>
        </p>
        <ul>
          {task &&
            task.map((item) => {
              return (
                <li>
                  {item}
                  <button className="focus:text-red-500 active:text-red-500 hover:text-red-500">
                    Clear
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default Tasks;
