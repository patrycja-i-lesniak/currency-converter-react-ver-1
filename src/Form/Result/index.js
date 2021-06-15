import "./style.css";

const Result = ({ result }) => (
    <div className="result">
        {result !== undefined && (
            <>
                <p>Kwota wyliczona na podstawie kursu NBP </p>
                <p> z dnia 14-06-2021:</p>
                <p className="result result--paragraph">{result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}</p>

            </>
        )}
    </div>
);

export default Result;