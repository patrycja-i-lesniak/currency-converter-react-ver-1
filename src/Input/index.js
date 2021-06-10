import "./style.css";

const Input = () => (
    <input
        className="input"
        type="number"
        min="0.01"
        step="0.01"
        placeholder="0,00"
        required />
);

export default Input;