import { useRef, useState } from "react";
import Project from "./components/Project";
import SideBar from "./components/SideBar";
import Tasks from "./components/Tasks";

function App() {
  const [pageType, setPageType] = useState("info");
  const [projectList, setProjectList] = useState([]);
  const [tasks, setTasks] = useState({});
  //{seq, tit, des, date}
  const projectSeq = useRef(null);
  const projectItem = projectList.find(
    (item) => item.seq == projectSeq.current
  );
  const task = tasks[projectSeq.current];
  //seq
  //info
  //add
  //update
  function setTasksHandle(key, val) {
    setTasks((preTasks) => {
      const getTask = preTasks.find((item) => item.seq == key) || [];
      const newTask = [...getTask, val];
      return {
        ...preTasks,
        [key]: newTask,
      };
    });
  }
  function setPageTypeHandle(type) {
    setPageType(type);
  }
  function setProjectListHandle(item) {
    setProjectList((pre) => {
      const seq = pre.at(-1)?.seq || 0;
      setTasks((pre) => {
        return { ...pre, [seq]: [] };
      });
      return [...pre, { seq: seq, ...item }];
    });
  }
  //02640460271192
  return (
    <main className="h-screen my-8 flex gap-8">
      <div className="flex flex-1">
        <SideBar
          className="flex-1"
          projectList={projectList}
          onAddClick={setPageTypeHandle}
          onProjectClick={(key, type) => {
            projectSeq.current = key;
            setPageTypeHandle("update");
          }}
        />
        <div className="flex-auto">
          {projectItem ? (
            <Tasks item={projectItem} task={task} setTasks={setTasksHandle} />
          ) : (
            <Project
              type={pageType}
              seq={projectSeq.current}
              onNewCick={setPageTypeHandle}
              onSaveList={setProjectListHandle}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
