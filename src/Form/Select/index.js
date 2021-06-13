import "./style.css";
import { useState } from "react";
import currencies from "../../currencies"

const Select = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("wybierz walutę");
    console.log(`Wybrana waluta: ${selectedCurrency}`);

    return (
        <select
            className="select"
            value={selectedCurrency}
            onChange={({ target }) => setSelectedCurrency(target.value)}
        >
            {currencies.map(currency => (
                <option key={currency.id}>
                    {currency.name}
                </option>
                )
            )}
        </select>
)}



export default Select;