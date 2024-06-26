import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "./itemsActions";

// Función reductora para los items, cuyo estado inicial es un arreglo vacio
export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    // Caso agregar un producto al carrito
    case AddProductCart:
      return [
        // Se modifica el estado en lugar de cartItems
        ...state,
        {
          // payload va a ser el objeto product
          product: action.payload,
          quantity: 1,
        },
      ];

    // Caso actualizar la cantidad del producto en el carrito
    case UpdateQuantityProductCart:
      return state.map((i) => {
        // Si el producto existe, solamente su cantidad aumentara en 1
        if (i.product.id === action.payload.id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        // El map devuelve un nuevo arreglo
        return i;
      });

    // Caso eliminar el producto del producto
    case DeleteProductCart:
      // payload va a ser el id en este caso
      return state.filter((i) => i.product.id !== action.payload);

    // Caso por defecto, devuelve el estado
    default:
      return state;
  }
};
