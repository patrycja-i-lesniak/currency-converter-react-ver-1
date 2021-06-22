import { useState, useEffect } from "react";
import { Paragraph } from "./styled.js";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, []);

    const formattedDate = date.toLocaleDateString(undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }
    );

    return (
        <Paragraph>
            Dzisiaj jest {formattedDate}
        </Paragraph>
    );

};

export default Clock;
