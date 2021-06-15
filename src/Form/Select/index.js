import "./style.css";
import currencies from "../../currencies";


const Select = ({ currency, setCurrency }) => (
    <select
        className="select"
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
    >
        {currencies.map(currency => (
            <option
                key={currency.id}
                value={currency.id}
            >
                {currency.name}
            </option>
        ))}
    </select>
)

export default Select;