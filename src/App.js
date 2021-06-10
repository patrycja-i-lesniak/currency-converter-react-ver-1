import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";

function App() {
  return (
    <main className="container">
     <Header title="Kalkulator walut" /> 
     <form className="form js-form">
        <fieldset className="form__fieldset">
          <p>
            <label>
            <Paragraph text=" Wartość w PLN:" />
              <input className="form__input js-inputValue" type="number" min="0.01" step="0.01" placeholder="0,00" required />
            </label>
          </p>
          <p>
            <label>
            <Paragraph text="Przelicz na:" />
              <select className="form__select js-selectedCurrency" name="convertTo">
                <option value="">wybierz walutę </option>
                <option value="CHF">CHF - Frank szwajcarski</option>
                <option value="EUR">EUR - Euro </option>
                <option value="GBP">GBP - Brytyjski funt szterling </option>
              </select>
            </label>
          </p>
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
