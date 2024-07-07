// Importar los componentes UserForm y UsersList, y el hook personalizado useUsers
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

// Componente funcional UsersApp
export const UsersApp = () => {

    // Desestructuración del objeto retornado por el hook useUsers
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return (
        <>
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    {
                        // Renderizar el componente UserForm solamente si el estado de visibleForm es true
                        !visibleForm || <div className="col">
                            {/* Renderizar el componente UserForm pasando las propiedades initialUserForm, userSelected, handlerAddUsers y handlerCloseForm */}
                            <UserForm
                                initialUserForm={initialUserForm}
                                userSelected={userSelected}
                                handlerAddUser={handlerAddUser}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    }
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
                                // Si hay usuarios, renderizar el componente UsersList, pasando las propiedades users, handlerRemoveUser y handlerUserSelectedForm */
                                <UsersList
                                    users={users}
                                    handlerRemoveUser={handlerRemoveUser}
                                    handlerUserSelectedForm={handlerUserSelectedForm}
                                />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

