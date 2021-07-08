import Header from "../App/Header";
import Form from "./Form";
import { Footer } from "./Footer";
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
