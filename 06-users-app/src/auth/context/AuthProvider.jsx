// Importar el hook personalizado useAuth y el contexto de autenticación
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";

// Definir el proveedor de contexto para la autenticación
export const AuthProvider = ({ children }) => {

    // Utilizar el hook useAuth para obtener el estado y funciones relacionadas con la autenticación
    const { login, handlerLogin, handlerLogout } = useAuth();

    // Retornar el proveedor de AuthContext
    return (
        <AuthContext.Provider value={{ login, handlerLogin, handlerLogout }}>
            {/* Renderizar los componentes hijos que estarán envueltos por el proveedor de contexto */}
            {children}
        </AuthContext.Provider>
    );
};
