import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import currencies from "./currencies";


function App() {
  return (
    <>
    <Container>
      <Header title="Kalkulator walut" />
      <Form currencies={currencies} />
      <Footer text="Coded by Trishya © 2021" />
    </Container>
    </>
  );
}

export default App;
