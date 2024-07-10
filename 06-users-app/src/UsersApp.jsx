// Importar la pagina LoginPages, el hook personalizado useAuth, componentes necesarios de react-router-dom y el componente UserRoutes
import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";

// Componente funcional principal UsersApp
export const UsersApp = () => {

    // Desestructuración del objeto retornado por el hook useAuth
    const { login, handlerLogin, handlerLogout } = useAuth();

    return (

        // Definir las rutas de la aplicación usando Routes
        <Routes>
            {
                // Si el usuario está autenticado, renderizar las rutas privadas
                login.isAuth
                    ? (

                        // Ruta base para las rutas privadas
                        <Route path="/*" element={
                            // Renderizar UserRoutes pasando las propiedades login y handlerLogout
                            <UserRoutes login={login} handlerLogout={handlerLogout} />
                        } />

                    )
                    : (

                        // Si el usuario no está autenticado, renderizar las rutas públicas
                        <>
                            {/* Ruta para la página de login */}
                            <Route path="/login" element={
                                // Renderizar LoginPage pasando la propiedad handlerLogin
                                <LoginPage handlerLogin={handlerLogin} />
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
