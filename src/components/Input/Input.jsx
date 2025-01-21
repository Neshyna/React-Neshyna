import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
export default Input;
