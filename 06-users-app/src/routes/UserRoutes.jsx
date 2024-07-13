// Importar componentes necesarios de react-router-dom, las páginas UsersPage y Register Page, el layout Navbar y el hook personalizado useUsers
import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"

// Componente funcional UserRoutes
// Recibe las propiedades desestructuradas login y handlerLogout
export const UserRoutes = ({ login, handlerLogout }) => {

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
            {/* Renderizar el componente Navbar pasando las propiedades login y handlerLogout */}
            <Navbar login={login} handlerLogout={handlerLogout} />

            {/* Definir las rutas utilizando Routes */}
            <Routes>

                {/* Ruta para /users que renderiza el componente UsersPage, se pasan las 9 propiedades */}
                <Route path="users" element={
                    <UsersPage
                        users={users}
                        userSelected={userSelected}
                        initialUserForm={initialUserForm}
                        visibleForm={visibleForm}
                        handlerAddUser={handlerAddUser}
                        handlerRemoveUser={handlerRemoveUser}
                        handlerUserSelectedForm={handlerUserSelectedForm}
                        handlerOpenForm={handlerOpenForm}
                        handlerCloseForm={handlerCloseForm}
                    />
                } />

                {/* Ruta para /users/register que renderiza el componente RegisterPage pasando las propiedades handlerAddUser e initialUserForm */}
                <Route path="users/register" element={
                    <RegisterPage
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                    />
                } />

                {/* Ruta para /users/edit/:id que renderiza el componente RegisterPage. Esta ruta utiliza un path variable (id) para identificar al usuario que se desea editar. Se pasan las propiedades users, handlerAddUser e initialUserForm.*/}
                <Route path="users/edit/:id" element={
                    <RegisterPage
                        users={users}
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                    />
                } />

                {/* Ruta raíz que redirige a /users */}
                <Route path="/" element={<Navigate to="/users" />} />

            </Routes>
        </>
    )
}
