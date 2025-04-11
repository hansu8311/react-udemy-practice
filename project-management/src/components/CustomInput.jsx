function CustomInput({ title, type = "text", ref, className, ...rest }) {
  let inputClass =
    "bg-slate-400 border-b-2 border-slate-500 focus:border-slate-800 ";
  if (className) inputClass += className;
  return (
    <p className="flex flex-col">
      <label className="mb-2">{title}</label>
      <input className={inputClass} type={type} ref={ref} {...rest}></input>
    </p>
  );
}

export default CustomInput;
