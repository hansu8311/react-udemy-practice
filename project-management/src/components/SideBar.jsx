import React from "react";

function SideBar({ projectList, onAddClick, onProjectClick, className, seq }) {
  const seclassName =
    "bg-slate-700 px-3 py-2 gap-2 rounded-r-lg text-left " + className;
  return (
    <section className={seclassName}>
      <h1 className="font-bold mb-5">YOUR PROJECTS</h1>
      <button
        onClick={() => {
          onAddClick("add");
        }}
        className="bg-slate-500 px-2 py-1 rounded-md mb-5"
      >
        Add Project
      </button>
      <ul className="px-5">
        {projectList &&
          projectList.map((item) => {
            let liclass = "pb-3 text-slate-400 ";
            if (item.seq == seq) liclass += "bg-slate-500";
            return (
              <li
                key={item.seq}
                className="pb-3 text-slate-400"
                onClick={() => onProjectClick(item.seq, item)}
              >
                {item.tit}
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default SideBar;
