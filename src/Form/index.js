import "./style.css";
import Button from "./Button";
import Input from "./Input";
import Paragraph from "./Paragraph";
import Select from "./Select";
import Result from "./Result";

const Form = ({ currencies }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__field">
                <Paragraph text=" Wartość w PLN" />
                <Input />
                <Paragraph text="Przelicz na" />
                <Select />
                <Button buttonName="Policz kurs" />
                <Result />
            </fieldset>
        </form>
    )
};

export default Form;