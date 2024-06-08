import { useState } from "react";
// import { invoice } from "../data/invoice"
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {

    // Desestructurar el objeto invoice recibido
    const { total, id, name, client, company, items: itemsInitial } = getInvoice()

    // Definir el estado para cada campo del formulario
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    // Definir el estado para los items de la factura
    const [items, setItems] = useState(itemsInitial);

    // Definir el estado para el contador de ID
    const [counter, setCounter] = useState(4);

    // Definir las funciones para manejar los cambios en los campos del formulario
    const onProductChange = ({ target }) => {
        console.log(target.value);
        setProductValue(target.value);
    }
    const onPriceChange = ({ target }) => {
        console.log(target.value);
        setPriceValue(target.value);
    }
    const onQuantityChange = ({ target }) => {
        console.log(target.value);
        setQuantityValue(target.value);
    }

    // Definir una función para manejar el envio del formulario
    const onInvoiceItemsSubmit = (event) => {

        // No recargar la pagina
        event.preventDefault();

        // Validaciones en los campos de texto
        if (productValue.trim().length <= 1) {
            alert('Error, el nombre del producto debe tener más de un caracter');
            return;
        }

        if (isNaN(priceValue.trim())) {
            alert('Error, el precio no es un número');
            return;
        }
        if (priceValue.trim().length <= 1) {
            alert('Error, el precio debe tener 2 digitos');
            return;
        }

        if (isNaN(quantityValue.trim())) {
            alert('Error, la cantidad no es un número');
            return;
        }
        /*
        if (quantityValue.trim().length < 1) return;
        */
        if (quantityValue < 1) {
            alert('Error, la cantidad tiene que ser mayor a 0');
            return;
        }

        // Actualizar el arreglo de items
        setItems([...items, {
            id: counter,
            product: productValue.trim(),
            price: +priceValue.trim(),
            quantity: parseInt(quantityValue.trim(), 10),
        }])

        // Limpiar los campos de texto
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        setCounter(counter + 1);

    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>
                        </div>

                        <ListItemsView title="Productos de la factura" items={items} />

                        <TotalView total={total} />

                        <form
                            onSubmit={onInvoiceItemsSubmit}
                            className="w-50"
                        >
                            <input
                                type="text"
                                name="product"
                                value={productValue}
                                placeholder="Producto"
                                className="form-control my-3"
                                onChange={onProductChange} />
                            <input
                                type="text"
                                name="price"
                                value={priceValue}
                                placeholder="Precio"
                                className="form-control my-3"
                                onChange={onPriceChange} />
                            <input
                                type="text"
                                name="quantity"
                                value={quantityValue}
                                placeholder="Cantidad"
                                className="form-control my-3"
                                onChange={onQuantityChange} />
                            <button type="submir" className="btn btn-primary my-3">Nuevo item</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}