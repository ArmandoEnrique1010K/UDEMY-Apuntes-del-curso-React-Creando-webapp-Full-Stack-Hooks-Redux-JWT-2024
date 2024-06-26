import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

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

    // Definir el estado para mostrar y ocultar el formulario
    const [activeForm, setActiveForm] = useState(false);

    // Definir el estado para el contador de ID
    const [counter, setCounter] = useState(4);

    // Definir el estado inicial de la factura
    const [invoice, setInvoice] = useState(invoiceInitial);

    // Definir el estado para los items de la factura
    const [items, setItems] = useState([]);

    // Definir el estado para el total de los items
    const [total, setTotal] = useState(0);

    // Desestructurar el objeto invoice recibido
    const { id, name, client, company } = invoice;

    // Definir el efecto secundario para obtener los datos de la factura luego de renderizar el componente
    useEffect(() => {
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
    }, []);

    // Definir el efecto secundario que dependa del arreglo items
    useEffect(() => {
        // Recalcular el total
        setTotal(calculateTotal(items));
    }, [items]);

    // Definir una función para agregar un nuevo item
    const handlerAddItems = ({ product, price, quantity }) => {

        // Actualizar el arreglo de items
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(), 10),
        }])

        setCounter(counter + 1);

    }

    // Definir una función para eliminar un item por su ID
    const handlerDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    // Definir una función para manejar el estado del botón
    const onActiveForm = () => {
        setActiveForm(!activeForm)
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
                        <ListItemsView title="Productos de la factura" items={items} handlerDeleteItem={(id) => handlerDeleteItem(id)} />

                        <TotalView total={total} />

                        <button className="btn btn-secondary" onClick={onActiveForm}
                        >{!activeForm ? "Agregar Item" : "Ocultar Form"}</button>

                        {!activeForm || <FormItemsView handler={handlerAddItems} />}
                    </div>
                </div>
            </div>
        </>
    )
}

