import "./style.css";
import { useState } from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <input
            className="input"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="0,00"
            required
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
        />
    )
};

export default Input;