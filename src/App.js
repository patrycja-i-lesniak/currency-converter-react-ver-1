import Header from "./Container/Header";
import Form from "./Container/Form";
import { Footer } from "./Container/Footer";
import { Container } from "./Container";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Container>
          <Header
            title="Kalkulator walut"
          />
          <Form />
          <Footer>
         Coded by Trishya © 2021
          </Footer>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
