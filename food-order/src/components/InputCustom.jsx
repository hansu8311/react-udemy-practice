export default function InputCustom({ label, id, error, ...rest }) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
