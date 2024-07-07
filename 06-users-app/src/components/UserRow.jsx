// Componente funcional UserRow
// Recibe las propiedades desestructuradas handlerUserSelectedForm, handlerRemoveUser, id, username y email
export const UserRow = ({ handlerUserSelectedForm, handlerRemoveUser, id, username, email }) => {

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
