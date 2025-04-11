import React, { useRef } from "react";
import CustomInput from "./CustomInput";

function Project({ type, onNewCick, onSaveList }) {
  const titRef = useRef(null);
  const desRef = useRef(null);
  const dateRef = useRef(null);
  if (type === "info")
    return (
      <section className="size-full flex flex-col gap-2 px-2 justify-center items-center">
        <img alt="no" className="size-20"></img>
        <p>No Project Selected</p>
        <button onClick={() => onNewCick("add")}>Create new project</button>
      </section>
    );
  if (type === "add")
    return (
      <section className="size-full flex flex-col gap-2 px-2">
        <div className="text-right">
          <button className="mr-2" onClick={() => onNewCick("info")}>
            Cancel
          </button>
          <button
            className="bg-slate-950 text-white px-2 py-1 rounded-md focus:bg-slate-800 hover:bg-slate-800 active:bg-slate-800"
            onClick={() => {
              onSaveList({
                tit: titRef.current.value,
                des: desRef.current.value,
                date: dateRef.current.value,
              });
              onNewCick("info");
              titRef.current.value = "";
              desRef.current.value = "";
              dateRef.current.value = "";
            }}
          >
            Save
          </button>
        </div>
        <CustomInput ref={titRef} title="TITLE"></CustomInput>
        <CustomInput
          ref={desRef}
          title="DESCRIPTION"
          className="h-20"
        ></CustomInput>
        <CustomInput ref={dateRef} title="DUE DATE" type="DATE"></CustomInput>
      </section>
    );
  if (type === "info") return <section></section>;
}

export default Project;
