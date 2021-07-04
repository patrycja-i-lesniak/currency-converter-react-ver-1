import axios from "axios";
import { useState, useEffect } from "react";


export const useApiExchangesRates = () => {
    const [ratesData, setRatesData] = useState(
        {
            status: "loading",
        }
    );

    const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        const getApiDate = async () => {
            try {
                const response = await axios.get(apiUrl);
                setRatesData(
                    {
                        date: response.data.date,
                        rates: response.data.rates,
                        status: "ready",
                    }
                );

            } catch (error) {
                setRatesData({ status: "error" });
            }
        };

        setTimeout(getApiDate, 3000);
    }, []);

    return ratesData;
};