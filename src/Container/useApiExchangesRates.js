import { useState, useEffect } from "react";


export const useApiExchangesRates = () => {
    const [ratesData, setRatesData] = useState(
        {
            status: "loading",
        }
    );

    const apiUrl = "https://api.exchangerate.host/latest";

    useEffect(() => {
        const getApiDate = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { date, rates } = await response.json();
                setRatesData({ date, rates, status: "ready" });


            } catch (error) {
                setRatesData({ status: "error" });
            }
        };

        setTimeout(getApiDate, 1000);
    }, []);

    return ratesData;
};