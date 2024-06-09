import { useEffect, useState } from "react";
// import { invoice } from "../data/invoice"
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

// Constante para definir el estado inicial de la factura
const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastname: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0,
        }
    },
    company: {
        name: '',
        fiscalNumber: 0
    },
    items: []
}

// Función principal del componente
export const InvoiceApp = () => {

    // Definir el estado para el contador de ID
    const [counter, setCounter] = useState(4);

    // Definir el estado inicial de la factura
    const [invoice, setInvoice] = useState(invoiceInitial);

    // Definir el estado para los items de la factura
    const [items, setItems] = useState([]);

    // Definir una constante para obtener los datos de la factura
    /*
    const invoice = getInvoice();
    console.log(invoice);
    */

    // Definir el estado unificado para todos los campos del formulario
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    // Definir el estado para cada campo del formulario
    /*
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    */

    // Desestructurar el objeto invoice recibido
    const { total, id, name, client, company } = invoice;

    // Desestructurar el objeto formItemsState
    const { product, price, quantity } = formItemsState

    // Definir el efecto secundario para obtener los datos de la factura luego de renderizar el componente
    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);

    // Definir el efecto secundario que dependa del atributo price del objeto formItemsState
    useEffect(() => {
        // console.log("el precio cambio");
    }, [price]);

    // Definir el efecto secundario que dependa del objeto formItemsState (el estado del formulario)
    useEffect(() => {
        // console.log("el formulario cambio")
    }, [formItemsState]);

    // Definir el efecto secundario que dependa del contador
    useEffect(() => {
        // console.log("el contador cambio")
    }, [counter]);

    // Definir el efecto secundario que dependa del arreglo items
    useEffect(() => {
        console.log("los items cambiaron")
    }, [items]);

    // Definir las funciones para manejar los cambios en los campos del formulario
    /*
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
    */

    // Definir una función para manejar los cambios en cada campo del formulario
    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name)
        // console.log(value);
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
        /*
        if (quantityValue.trim().length < 1) return;
        */
        if (quantity < 1) {
            alert('Error, la cantidad tiene que ser mayor a 0');
            return;
        }

        // Actualizar el arreglo de items
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(), 10),
        }])

        // Limpiar los campos de texto
        /*
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        */
        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        })
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
                    </div>
                </div>
            </div>
        </>
    )
}

