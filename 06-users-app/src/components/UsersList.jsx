// Importar el componente UserRow, el hook useContext y el contexto UserContext
import { useContext } from "react";
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext";

// Componente funcional UsersList
export const UsersList = () => {

    // Obtener la propiedad user desde el contexto UserContext
    const { users } = useContext(UserContext);

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>update route</th>
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
                            // Pasar las propiedades id, username y email al componente UserRow
                            id={id}
                            username={username}
                            email={email}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}
