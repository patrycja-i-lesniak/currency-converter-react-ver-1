import { Paragraph } from "./styled.js";
import {useCurrentDate} from "./useCurrentDate";


export const Clock = () => {
    const date = useCurrentDate();

    const formatDate = (date) => date.toLocaleDateString(undefined,
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
            Dzisiaj jest {formatDate(date)}
        </Paragraph>
    );
};