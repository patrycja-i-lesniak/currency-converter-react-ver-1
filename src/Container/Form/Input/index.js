import { InputBody } from "./styled.js";

const Input = ({ amount, setAmount }) => {
    return (
        <InputBody
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