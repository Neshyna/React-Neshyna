import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function HW3() {
  return (
    <div className="hw3-wrapper">
      <Input
        placeholder="Enter your email"
        id="input"
        label="Email"
        type="text"
        name="input"
      />
      <Button name="Send email" type="submit" />
    </div>
  );
}

export default HW3;
