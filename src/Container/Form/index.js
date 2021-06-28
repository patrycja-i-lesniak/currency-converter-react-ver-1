import "./styled.js";
import { useState, useRef } from "react";
import Button from "./Button";
import Paragraph from "../Paragraph";
import Result from "./Result";
import currencies from "../currencies";
import { Clock } from "./Clock";
import { FormBody, Fieldset, Input } from "./styled"

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
                    type="number"
                    min="0.01"
                    step="0.01"
                    placeholder="0,00"
                    required
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                />
                <Paragraph text="Przelicz na" />
                <Input
                    as="select"
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
               </Input>
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