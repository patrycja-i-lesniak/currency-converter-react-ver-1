import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Input from "./Input";
import Select from "./Select";

function App() {
  return (
    <main className="container">
      <Header title="Kalkulator walut" />
      <form className="form js-form">
        <fieldset className="form__fieldset">
              <Paragraph text=" Wartość w PLN:" />
              <Input />
              <Paragraph text="Przelicz na:" />
              <Select />
          <p className="container">
            <button className="form__button">Policz kurs:</button>
          </p>
          <Paragraph text="Kwota w wybranej walucie:">
            <span className="paragraph--value">N/A</span>
          </Paragraph>
        </fieldset>
      </form>
      <Footer />
    </main>
  );
}

export default App;
