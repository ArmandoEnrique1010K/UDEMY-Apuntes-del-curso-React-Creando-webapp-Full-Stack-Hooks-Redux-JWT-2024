//Importar componentes necesarios de react-router-dom
import { NavLink } from "react-router-dom";

// Layout funcional Navbar
// Recibe las propiedades desestructuradas login y handlerLogout
export const Navbar = ({ login, handlerLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Marca del Navbar */}
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido del Navbar colapsable */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* Enlace a la página de usuarios */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Usuarios</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Sección del Navbar alineada a la derecha */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                    <span className="nav-item nav-link text-primary mx-3">
                        {
                            // Mostrar el nombre del usuario que ha iniciado sesion, se obtiene del estado login. En el caso de que sea undefined no ocurrira un error grave porque se tiene el operador optional chaining
                            login.user?.username
                        }
                    </span>
                    <button
                        className="btn btn-outline-success"
                        // Manejador de evento al pulsar el boton, se invoca la función handlerLogout
                        onClick={handlerLogout}
                    >
                        logout
                    </button>
                </div>
            </div>
        </nav>
    );
}
