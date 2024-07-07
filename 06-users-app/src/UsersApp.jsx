// Importar la pagina LoginPage
import { LoginPage } from "./auth/pages/LoginPage";

// Componente funcional UsersApp
export const UsersApp = () => {

    return (
        <>
            {/* Renderizar la pagina web LoginPage para iniciar sesion */}
            <LoginPage />
            {/* <UsersPage /> */}
        </>
    );
}
