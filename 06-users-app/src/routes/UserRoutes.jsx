// Importar componentes necesarios de react-router-dom, la página UsersPage y el layout Navbar
import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"

// Componente funcional UserRoutes
// Recibe las propiedades desestructuradas login y handlerLogout
export const UserRoutes = ({ login, handlerLogout }) => {

    return (
        <>
            {/* Renderizar el componente Navbar pasando las propiedades login y handlerLogout */}
            <Navbar login={login} handlerLogout={handlerLogout} />

            {/* Definir las rutas utilizando Routes */}
            <Routes>

                {/* Ruta para /users que renderiza el componente UsersPage */}
                <Route path="users" element={<UsersPage />} />

                {/* Ruta raíz que redirige a /users */}
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}
