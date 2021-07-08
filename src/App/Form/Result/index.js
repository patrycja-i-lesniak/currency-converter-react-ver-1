import { Wrapped, Paragraph } from "./styled.js";

const Result = ({ result, date }) => (
    <Wrapped>
        {result !== undefined && (
            <>
                <Paragraph highlight>
                    {result.sourceAmount.toFixed(2)}&nbsp;&nbsp;PLN&nbsp;&nbsp;={"  "}
                    {result.targetAmount.toFixed(2)}&nbsp;&nbsp;{result.currency}
                </Paragraph>
                <Paragraph result>Kurs aktualny na dzień: {date} </Paragraph>
            </>
        )}
    </Wrapped>
);

export default Result;