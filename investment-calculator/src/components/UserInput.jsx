function UserInput({ type = "number", label, onChange, ...res }) {
  return (
    <p>
      <label>{label}</label>
      <input {...res} onChange={(e) => onChange(label, e.target.value)} />
    </p>
  );
}

export default UserInput;
