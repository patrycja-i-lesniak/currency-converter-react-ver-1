import "./style.css";

const Select = () => (
    <select className="select" name="convertTo">
        <option value="">wybierz walutę </option>
        <option value="CHF">CHF - Frank szwajcarski</option>
        <option value="EUR">EUR - Euro </option>
        <option value="GBP">GBP - Brytyjski funt szterling </option>
    </select>
);

export default Select;