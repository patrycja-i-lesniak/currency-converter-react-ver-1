import "./style.css";
import Button from "./Button";
import Input from "./Input";
import Paragraph from "./Paragraph";
import Select from "./Select";
import Result from "./Result";
import { useState } from "react";
import currencies from "../currencies";

const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].id);

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <form
            className="form"
            onSubmit={onSubmit}
        >
            <fieldset className="form__field">
                <Paragraph
                    text="Kwota w PLN"
                />
                <Input
                    amount={amount}
                    setAmount={setAmount}
                />
                <Paragraph text="Przelicz na" />
                <Select
                    currency={currency}
                    setCurrency={setCurrency}
                />
                <Button
                    buttonName="Policz kurs"
                />
                <Result
                    result={result}
                />
            </fieldset>
        </form>
    );
};

export default Form;