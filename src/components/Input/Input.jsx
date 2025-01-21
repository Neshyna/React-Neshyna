import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
export default Input;
