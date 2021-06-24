import "./styled.js";
import { useState, useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Paragraph from "../Paragraph";
import Select from "./Select";
import Result from "./Result";
import currencies from "../currencies";
import { Clock } from "./Clock";
import { FormBody, Fieldset } from "./styled"

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].id);
    const [result, setResult] = useState();
    const calculateResult = (amount, currency) => {

        const rate = currencies
            .find(({ id }) => id === currency)
            .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    const inputRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <FormBody
            onSubmit={onSubmit}
        >
            <Fieldset>
                <Clock />
                <Paragraph
                    text="Kwota w PLN"
                />
                <Input
                    ref={inputRef}
                    amount={amount}
                    setAmount={setAmount}
                />
                <Paragraph text="Przelicz na" />
                <Select
                    currency={currency}
                    setCurrency={setCurrency}
                />
                <Button
                    onClick={() => inputRef.current.focus()}
                    buttonName="Policz kurs"
                />
                <Result
                    result={result}
                />
            </Fieldset>
        </FormBody>
    );
};

export default Form;