import "./styled.js";
import { useState, useRef } from "react";
import Button from "./Button";
import Paragraph from "../../App/Paragraph";
import Result from "./Result";
import { Clock } from "./Clock";
import { useApiExchangesRates } from "../../App/useApiExchangesRates";
import { FormBody, Fieldset, Input, Loading, NoInternet } from "./styled";


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
    const rates = ratesData.rates;
    const date = ratesData.date;

    const calculateResult = () => {
        const rate = rates[currency];
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
                        <>
                            <Loading />
                            <Paragraph text="Ładuję kursy walut z Europejskiego Banku Centralnego" />
                        </>
                    )
                    : status === "error" ? (
                        <>
                            <NoInternet />
                            <Paragraph text="Ups.. mamy problem. Sprawdź połączenie z internetem lub wróć za chwilę." />
                        </>
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
                            <Input select
                                as="select"
                                onChange={({ target }) => setCurrency(target.value)}
                                required
                                value={currency}
                            >
                                {Object.keys(rates).map((currency) => (
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
                                date={date}
                            />
                        </>
                    )}
            </Fieldset>
        </FormBody>
    );
};

export default Form;