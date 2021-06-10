import "./style.css";
import Button from "../Button";
import Input from "../Input";
import Paragraph from "../Paragraph";
import Select from "../Select";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <Paragraph text=" Wartość w PLN:" />
            <Input />
            <Paragraph text="Przelicz na:" />
            <Select />
            <Button buttonName="Policz kurs" />
            <Paragraph text="Kwota w wybranej walucie:">
                <span className="paragraph--value">N/A</span>
            </Paragraph>
        </fieldset>
    </form>
);

export default Form;