import { useState, useEffect } from "react";
import "./style.css";

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
        <p className="clock">Dzisiaj jest {formattedDate}</p>
    );

};

export default Clock;
