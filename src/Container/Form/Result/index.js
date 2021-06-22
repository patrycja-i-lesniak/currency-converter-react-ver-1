import { Wrapped, Paragraph } from "./styled.js";

const Result = ({ result }) => (
    <Wrapped>
        {result !== undefined && (
            <>
                <Paragraph>Kwota wyliczona na podstawie kursu NBP </Paragraph>
                <Paragraph> z dnia 14-06-2021:</Paragraph>
                <Paragraph bolder>
                        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </Paragraph>
            </>
        )}
    </Wrapped>
);

export default Result;