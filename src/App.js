function App() {
  return (
    <main>
      <form className="form js-form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walut</legend>
          <p>
            <label>
              <span className="form__text">
                Wartość w PLN:
              </span>
              <input className="form__input js-inputValue" type="number" min="0.01" step="0.01" placeholder="0,00" required />
            </label>
          </p>
          <p>
            <label>
              <span className="form__text">
                Przelicz na:
                </span>
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
          <p className="paragraph"> Kwota w wybranej walucie: <span className="paragraph__value js-value">N/A</span></p>
        </fieldset>
      </form>
    </main>
  );
}

export default App;
