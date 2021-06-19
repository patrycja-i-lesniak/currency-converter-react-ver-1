import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date().toLocaleDateString(undefined,
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                }
            ));
        }, 0);

        return () => {
            clearInterval(intervalId)
        };
    });
    return (
        <p className="clock">Dzisiaj jest {date}</p>
    )
};

export default Clock;
