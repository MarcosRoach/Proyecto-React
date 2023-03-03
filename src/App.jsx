import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Container>
      <Navbar />
      <ItemListContainer greeting="Saludo de Bienvenida" />
    </Container>
  );
}

export default App;
