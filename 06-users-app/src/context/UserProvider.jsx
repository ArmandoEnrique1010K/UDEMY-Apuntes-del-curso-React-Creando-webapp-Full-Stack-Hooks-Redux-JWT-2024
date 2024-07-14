// Importar el hook personalizado useUsers y el contexto de usuario
import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext";

// Definir el proveedor de contexto para los usuarios
export const UserProvider = ({ children }) => {

    // Utilizar el hook useUsers para obtener el estado y funciones relacionadas con los usuarios
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

    // Retornar el proveedor de UserContext
    return (
        <UserContext.Provider value={{
            users,
            userSelected,
            initialUserForm,
            visibleForm,
            handlerAddUser,
            handlerRemoveUser,
            handlerUserSelectedForm,
            handlerOpenForm,
            handlerCloseForm,
        }}>
            {/* Renderizar los componentes hijos que estarán envueltos por el proveedor de contexto */}
            {children}
        </UserContext.Provider>
    );
};
