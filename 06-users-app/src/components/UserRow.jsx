// Importar NavLink de react-router-dom, el hook useContext y el contexto UserContext
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// Componente funcional UserRow
// Recibe las propiedades desestructuradas id, username y email
export const UserRow = ({ id, username, email }) => {

    // Obtener las propiedades handlerUserSelectedForm y handlerRemoveUser desde el contexto UserContext
    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);

    // Función para eliminar el usuario
    const onRemoveUser = (id) => {
        // Llama a la función handlerRemoveUser con el id del usuario para eliminarlo
        handlerRemoveUser(id);
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    // Manejador de evento al pulsar el boton
                    onClick={() =>
                        // Llama a la función handlerUserSelectedForm con las propiedades desestructuradas id, username y email del usuario para seleccionarlo
                        handlerUserSelectedForm({ id, username, email })}>
                    update
                </button>
            </td>
            <td>
                {/* Enlace a la página de edición del usuario. Utiliza el id del usuario para construir la ruta dinámica. */}
                <NavLink
                    className={'btn btn-secondary btn-sm'}
                    to={'/users/edit/' + id}>
                    update route
                </NavLink>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    // Manejador de evento al pulsar el boton
                    onClick={() => onRemoveUser(id)}>
                    remove
                </button>
            </td>
        </tr>
    )
}
