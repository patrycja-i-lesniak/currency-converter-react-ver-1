import { Wrapped, Paragraph } from "./styled.js";

const Result = ({ result }) => (
    <Wrapped>
        {result !== undefined && (
            <>
                <Paragraph>Kursy walut pobierane są z Europejskiego BankuCentralnego. </Paragraph>
                <Paragraph> Aktualne na dzień:</Paragraph>
                <Paragraph bolder>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </Paragraph>
            </>
        )}
    </Wrapped>
);

export default Result;