import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler }) => {

    // Estado inicial para la lista de productos
    const [products, setProducts] = useState([]);

    // Efecto secundario para obtener la lista de productos
    useEffect(() => {
        setProducts(getProducts());
    }, []);

    return (
        <>
            <div className="row">
                {products.map(prod => (

                    <div
                        className="col-4 my-2"
                        key={prod.id}
                    >
                        <ProductCardView
                            handler={handler}
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>

                ))}
            </div>
        </>
    )
}
