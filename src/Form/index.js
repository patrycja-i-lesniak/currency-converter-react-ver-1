import "./style.css";
import Button from "../Button";
import Input from "../Input";
import Paragraph from "../Paragraph";
import Select from "../Select";
import Result from "../Result";

const Form = () => (
    <form className="form">
        <fieldset className="form__field">
            <Paragraph text=" Wartość w PLN:" />
            <Input />
            <Paragraph text="Przelicz na:" />
            <Select />
            <Button buttonName="Policz kurs" />
            <Paragraph text="Kwota w wybranej walucie:">
                <Result />
            </Paragraph>
        </fieldset>
    </form>
);

export default Form;