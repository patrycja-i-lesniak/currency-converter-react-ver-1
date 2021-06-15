import "./style.css";

const Input = ({ amount, setAmount }) => {
    return (
        <input
            className="input"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="0,00"
            required
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
        />
    )
};

export default Input;