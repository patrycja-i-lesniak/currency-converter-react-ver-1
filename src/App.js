import Header from "./Container/Header";
import Form from "./Container/Form";
import { Footer } from "./Container/Footer";
import { Container } from "./Container";

function App() {
  return (
    <>
      <Container>
        <Header
          title="Kalkulator walut"
        />
        <Form />
        <Footer>
          © 2021 | Coded by Patrycja Leśniak
        </Footer>
      </Container>
    </>
  );
};

export default App;
