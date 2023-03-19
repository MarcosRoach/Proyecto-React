import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";

const ItemDetailContainer = () => {
  //  Acceder al valor del parametro de la ruta del navegador
  const { id } = useParams();

  const [producto, setProducto] = useState({});

  // Funcion Para consumir API con Async Await + Axios
  const getProducto = async () => {
    try {
      const res = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setProducto(res.data));
    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <div>
      <CardItem producto={producto}></CardItem>
    </div>
  );
};

export default ItemDetailContainer;
