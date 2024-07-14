// Importar componentes necesarios de react-router-dom, las páginas UsersPage y Register Page, el layout Navbar y el proveedor UserProvider
import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { UserProvider } from "../context/UserProvider"

// Componente funcional UserRoutes
export const UserRoutes = () => {

    return (
        <>
            {/* Permitir el acceso al contexto UserContext */}
            <UserProvider>

                {/* Renderizar el componente Navbar */}
                <Navbar />

                {/* Definir las rutas utilizando Routes */}
                <Routes>

                    {/* Ruta para /users que renderiza el componente UsersPage */}
                    <Route path="users" element={<UsersPage />} />

                    {/* Ruta para /users/register que renderiza el componente RegisterPage */}
                    <Route path="users/register" element={
                        <RegisterPage />
                    } />

                    {/* Ruta para /users/edit/:id que renderiza el componente RegisterPage. Esta ruta utiliza un path variable (id) para identificar al usuario que se desea editar. */}
                    <Route path="users/edit/:id" element={
                        <RegisterPage />
                    } />

                    {/* Ruta raíz que redirige a /users */}
                    <Route path="/" element={<Navigate to="/users" />} />

                </Routes>
            </UserProvider>

        </>
    )
}
