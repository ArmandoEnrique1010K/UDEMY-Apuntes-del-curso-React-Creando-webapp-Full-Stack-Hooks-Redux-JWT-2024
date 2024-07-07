// Importar el componente UserRow
import { UserRow } from "./UserRow"

// Componente funcional UsersList
// Recibe las propiedades desestructuradas handlerUserSelectedForm y handlerRemoveUser (como funciones), y users (por defecto es un arreglo vacio)
export const UsersList = ({ handlerUserSelectedForm, handlerRemoveUser, users = [] }) => {

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Iteración sobre cada usuario en el arreglo users, se desestructuran sus propiedades id, username y email
                    users.map(({ id, username, email }) => (
                        // Renderiza el componente UserRow para cada usuario
                        <UserRow
                            // Clave única para el elemento de la lista
                            key={id}
                            // Pasar las propiedades id, username, email, handlerUserSelectedForm y handlerRemoveUser al componente UserRow
                            id={id}
                            username={username}
                            email={email}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}
