import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "../reducer/itemsActions";

// Valores iniciales para el estado cartItems, se guardan en sessionStorage (si hay) o es un arreglo vacio
const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
  // Estado para los productos del carrito con una logica personalizada definida en itemsReducer
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  // Efecto secundario para guardar los items del carrito en sessionStorage
  useEffect(() => {
    // Implementar sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para añadir un producto al carrito
  const handlerAddProductCart = (product) => {
    // Validar si el item con el id... ya existe en el carrito
    const hasItem = cartItems.find((i) => i.product.id === product.id);

    if (hasItem) {
      // Despachar el objeto product con la función UpdateQuantityProductCart
      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      });
    } else {
      // Despachar el objeto product con la función AddProductCart
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  // Funcion para eliminar un producto del carrito
  const handlerDeleteProductCart = (id) => {
    // Despachar el id con la función DeleteProductCart
    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
  };

  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  };
};
