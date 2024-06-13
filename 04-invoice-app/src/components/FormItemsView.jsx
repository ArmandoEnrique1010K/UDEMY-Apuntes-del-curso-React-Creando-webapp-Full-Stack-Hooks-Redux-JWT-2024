import { useState } from "react";

export const FormItemsView = ({ handler }) => {

    // Definir el estado unificado para todos los campos del formulario
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    // Desestructurar el objeto formItemsState
    const { product, price, quantity } = formItemsState

    // Definir una función para manejar los cambios en cada campo del formulario
    const onInputChange = ({ target: { name, value } }) => {
        setFormItemsState({
            ...formItemsState,
            [name]: value,
        })
    }

    // Definir una función para manejar el envio del formulario
    const onInvoiceItemsSubmit = (event) => {

        // No recargar la pagina
        event.preventDefault();

        // Validaciones en los campos de texto
        if (product.trim().length <= 1) {
            alert('Error, el nombre del producto debe tener más de un caracter');
            return;
        }

        if (isNaN(price.trim())) {
            alert('Error, el precio no es un número');
            return;
        }
        if (price.trim().length <= 1) {
            alert('Error, el precio debe tener 2 digitos');
            return;
        }

        if (isNaN(quantity.trim())) {
            alert('Error, la cantidad no es un número');
            return;
        }
        if (quantity < 1) {
            alert('Error, la cantidad tiene que ser mayor a 0');
            return;
        }

        // Pasar los datos del formulario
        handler(formItemsState);

        // Limpiar los campos de texto
        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        })

    }

    return (<>
        <form
            onSubmit={onInvoiceItemsSubmit}
            className="w-50"
        >
            <input
                type="text"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control my-3"
                onChange={onInputChange} />
            <input
                type="text"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control my-3"
                onChange={onInputChange} />
            <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control my-3"
                onChange={onInputChange} />
            <button type="submir" className="btn btn-primary my-3">Nuevo item</button>
        </form>
    </>)
}
