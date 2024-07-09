// Importar las paginas LoginPages y UsersPage, el layout Navbar y el hook personalizado useAuth
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";

// Componente funcional principal UsersApp
export const UsersApp = () => {

    // Desestructuración del objeto retornado por el hook useAuth
    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <>
            {
                // Renderizar Navbar pasando la propiedad handlerLogout y UsersPage, si el usuario está autenticado; de lo contrario, renderizar LoginPage pasando la propiedad handlerLogin
                login.isAuth
                    ? (
                        <>
                            <Navbar
                                login={login}
                                handlerLogout={handlerLogout}
                            />
                            <UsersPage />
                        </>
                    )
                    : <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}
