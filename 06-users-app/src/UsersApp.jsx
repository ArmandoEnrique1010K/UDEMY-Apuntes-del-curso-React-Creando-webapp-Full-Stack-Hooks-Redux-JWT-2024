// Importar la pagina LoginPages, los componentes necesarios de react-router-dom, el componente UserRoutes, el hook useContext y el contexto AuthContext
import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";

// Componente funcional principal UsersApp
export const UsersApp = () => {

    // Obtener la propiedad login desde el contexto AuthContext
    const { login } = useContext(AuthContext);

    return (

        // Definir las rutas de la aplicación usando Routes
        <Routes>
            {
                // Si el usuario está autenticado, renderizar las rutas privadas
                login.isAuth
                    ? (
                        // Ruta base para las rutas privadas
                        <Route path="/*" element={
                            // Renderizar UserRoutes
                            <UserRoutes />
                        } />
                    )
                    : (
                        // Si el usuario no está autenticado, renderizar las rutas públicas
                        <>
                            {/* Ruta para la página de login */}
                            <Route path="/login" element={
                                // Renderizar LoginPage
                                <LoginPage />
                            } />
                            {/* Ruta por defecto para redirigir a la página de login */}
                            <Route path="/*" element={
                                // Redirigir a /login si la ruta no está definida
                                <Navigate to="/login" />
                            } />
                        </>
                    )
            }
        </Routes>
    );
}
