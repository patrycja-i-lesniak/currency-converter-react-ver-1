import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import { useState } from "react";
import currencies from "./currencies"


function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies
      .find(({ id }) => id === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <>
      <Container>
        <Header
          title="Kalkulator walut"
        />
        <Form
          calculateResult={calculateResult}
          result={result}
        />
        <Footer
          text="Coded by Trishya © 2021"
        />
      </Container>
    </>
  );
};

export default App;
