import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productServices";

export const CartView = ({ handlerDelete, items }) => {

    // Estado inicial para el calculo del precio total
    const [total, setTotal] = useState(0);

    // Efecto secundario para recalcular el total
    useEffect(() => {

        // Establecer el valor del total, se invoca a la función desde productServices
        setTotal(calculateTotal(items));

        // Implementar sessionStorage 
        sessionStorage.setItem('cart', JSON.stringify(items));

    }, [items])

    // Funcion para eliminar un producto
    const onDeleteProduct = (id) => {
        // console.log("eliminando producto");
        handlerDelete(id);
    }

    return (<>
        <h3>Carro de compras</h3>
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.product.price}</td>
                        <td><button
                            className="btn btn-danger"
                            onClick={() => onDeleteProduct(item.product.id)}
                        >eliminar</button></td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} className="text-end fw-bold">Total</td>
                    <td colSpan={2} className="text-start fw-bold">{total}</td>
                </tr>
            </tfoot>
        </table>
    </>)
}

