import "./styled.js";
import { useState, useRef } from "react";
import Button from "./Button";
import Paragraph from "../Paragraph";
import Result from "./Result";
import { Clock } from "./Clock";
import { useApiExchangesRates } from "../useApiExchangesRates";
import { FormBody, Fieldset, Input } from "./styled";


const Form = () => {
    const [amount, setAmount] = useState();
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState();

    const inputRef = useRef(null);
    const deleteAmount = () => {
        setAmount([]);
    };

    const ratesData = useApiExchangesRates();
    const status = ratesData.status;

    const calculateResult = () => {
        const rate = ratesData.rates[currency];
        console.log(rate);
        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const amountTrimmed = amount.trim();
        if (!amountTrimmed) {
            return;
        }
        deleteAmount(amountTrimmed);
        calculateResult(amount, currency);
        inputRef.current.focus();
    };


    return (
        <FormBody onSubmit={onSubmit}>
            <Fieldset>
                {status === "loading"
                    ? (
                        <Paragraph text="Ładuję kursy walut z Europejskiego Banku Centralnego" />
                    )
                    : status === "error" ? (
                        <Paragraph text="Odpieramy atak zombie. Wróć za chwilę lub sprawdź połączenie z internetem." />
                    ) : (
                        <>
                            <Clock />
                            <Paragraph
                                text="Wpisz kwotę w PLN"
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
                                onChange={({ target }) => setCurrency(target.value)}
                                required
                                value={currency}
                            >
                                {Object.keys(ratesData.rates).map((currency) => (
                                    <option
                                        key={currency}
                                        value={currency}
                                    >
                                        {currency}
                                    </option>
                                ))}
                            </Input>
                            <Button
                                buttonName="Policz kurs"
                            />
                            <Result
                                result={result}
                                date={ratesData.date}
                            />
                        </>
                    )}
            </Fieldset>
        </FormBody>
    );
};

export default Form;