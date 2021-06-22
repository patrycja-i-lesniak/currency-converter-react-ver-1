import Header from "./Container/Header";
import Form from "./Container/Form";
import Footer from "./Container/Footer";
import Container from "./Container";

function App() {
  return (
    <>
      <Container>
        <Header
          title="Kalkulator walut"
        />
        <Form />
        <Footer
          text="Coded by Trishya © 2021"
        />
      </Container>
    </>
  );
};

export default App;
