import { Wrapped, Paragraph } from "./styled.js";

const Result = ({ result, date }) => (
    <Wrapped>
        {result !== undefined && (
            <>
                <Paragraph>Kursy walut pobierane są z Europejskiego BankuCentralnego. </Paragraph>
                <Paragraph>Kurs aktualny na dzień: {date} </Paragraph>
                <Paragraph bolder>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </Paragraph>
            </>
        )}
    </Wrapped>
);

export default Result;