import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

// Valores iniciales para el estado cartItems, se guardan en sessionStorage (si hay) o es un arreglo vacio
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

// Funcion principal del componente CartApp
export const CartApp = () => {

    // Estado para los productos del carrito
    const [cartItems, setCartItems] = useState(initialCartItems);

    // Función para añadir un producto al carrito
    const handlerAddProductCart = (product) => {

        // Validar si el item con el id... ya existe en el carrito
        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if (hasItem) {

            // Actualizar el estado de cartItems con el metodo map
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])
            setCartItems(
                cartItems.map((i) => {
                    // Si el producto existe, solamente su cantidad aumentara en 1
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    // El map devuelve un nuevo arreglo
                    return i;
                }),
            )

        } else {

            // Actualizar el estado de cartItems, agregando el item
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);

        }

    }

    // Funcion para eliminar un producto del carrito
    const handlerDeleteProductCart = (id) => {
        // Actualizar el estado de cartItems excluyendo el producto con el id...
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }

    return (
        <>
            <div className="container my-4">
                <h3>Cart App</h3>
                <CatalogView handler={handlerAddProductCart} />

                {cartItems?.length <= 0 || (
                    <div className="my-4 w-50">
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                    </div>
                )}
            </div>
        </>
    )
}
