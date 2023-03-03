import React from "react";
import styles from "./cartWidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <div className={styles.cartWidget}>
      <Badge badgeContent={4} color="warning">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
