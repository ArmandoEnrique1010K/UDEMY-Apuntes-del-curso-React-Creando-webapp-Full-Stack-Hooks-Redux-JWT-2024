// Importar los componentes UserModalForm y UsersList, el hook useContext y el contexto UserContext
import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";

// Pagina web funcional UsersPage
export const UsersPage = () => {

    // Obtener todas las propiedades desde el contexto UserContext
    const {
        users,
        visibleForm,
        handlerOpenForm,
    } = useContext(UserContext);

    return (
        <>
            {
                // Renderizar el componente UserModalForm solamente si el estado de visibleForm es true
                !visibleForm || <UserModalForm />
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {
                            // Renderizar el botón para agregar un nuevo usuario solamente si el estado de visibleForm es false
                            visibleForm || <button
                                className="btn btn-primary my-2"
                                type="button"
                                // Manejador de evento al pulsar el boton, se invoca la función handlerOpenForm
                                onClick={handlerOpenForm}>
                                Nuevo usuario
                            </button>
                        }
                        {
                            // Verificar si la lista de usuarios está vacía
                            users.length === 0 ?
                                // Si no hay usuarios, mostrar un mensaje de advertencia
                                <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                                :
                                // Si hay usuarios, renderizar el componente UsersList*/
                                <UsersList />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
