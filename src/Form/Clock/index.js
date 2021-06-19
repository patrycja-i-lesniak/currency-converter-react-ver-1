import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date().toLocaleString(("pl"),
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
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
