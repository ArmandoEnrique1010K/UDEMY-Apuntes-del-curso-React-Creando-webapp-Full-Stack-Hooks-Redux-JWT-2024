import { products } from "../data/products";

// Función para obtener los productos
export const getProducts = () => {
  return products;
};

// Función para calcular el total
export const calculateTotal = (items) => {
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );
};
