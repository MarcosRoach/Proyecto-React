import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import Bienvenida from "./components/Bienvenida/Bienvenida";
import Contacto from "./components/Contacto/Contacto";

function App() {
  const [productos, setProductos] = useState([]);

  // Funcion Para consumir API con Async Await + Axios
  const getProductos = async () => {
    try {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setProductos(res.data));
    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Container>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        <Route
          path="/home"
          element={<Bienvenida saludo={"Bienvenidos a la Tienda "} />}
        ></Route>
        <Route
          path="/shop"
          element={<ItemListContainer productos={productos} />}
        ></Route>
        <Route path="/shop/:id" element={<ItemDetailContainer />}></Route>
        <Route
          path="/shop/categoria/:categoria"
          element={<ItemListContainer productos={productos} />}
        ></Route>
        <Route path="/contact" element={<Contacto />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
