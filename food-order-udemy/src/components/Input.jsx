export default function Input({ label, id, error, ...rest }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...rest} />
    </p>
  );
}
