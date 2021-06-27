import { Wrapped } from "./styled";
import currencies from "../../currencies";


const Select = ({ currency, setCurrency }) => (
    <Wrapped
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
    >
        {currencies.map(currency => (
            <option
                key={currency.id}
                value={currency.id}
                required
            >
                {currency.name}
            </option>
        ))}
    </Wrapped>
)

export default Select;