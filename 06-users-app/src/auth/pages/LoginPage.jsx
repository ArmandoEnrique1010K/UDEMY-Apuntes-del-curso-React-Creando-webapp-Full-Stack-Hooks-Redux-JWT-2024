// Importar el hook useState y la libreria SweetAlert2
import { useState } from "react";
import Swal from "sweetalert2";

// Valores iniciales para el formulario de login
const initialLoginForm = {
    username: '',
    password: '',
}

// Pagina web funcional LoginPage
// Recibe la propiedad desestructurada handlerLogin
export const LoginPage = ({ handlerLogin }) => {

    // Estado local para el formulario de login
    const [loginForm, setLoginForm] = useState(initialLoginForm)

    // Desestructuración de los campos del formulario desde el estado
    const { username, password } = loginForm;

    // Función para manejar cambios en los campos del formulario
    const onInputChange = ({ target }) => {

        // Extraer el nombre y el valor del campo de entrada
        const { name, value } = target;

        // Actualizar el estado del formulario con el nuevo valor
        setLoginForm({
            // Mantener los valores existentes del formulario
            ...loginForm,
            // Actualizar el campo específico con su nuevo valor
            [name]: value,
        })
    }

    // Función para manejar el envío del formulario
    const onSumbit = (event) => {

        // Prevenir la recarga de la página al enviar el formulario
        event.preventDefault();

        // Validar que todos los campos del formulario estén completos
        if (!username || !password) {

            // Mostrar un mensaje de alerta con SweetAlert si algún campo está vacío
            Swal.fire({
                title: "Error de validación",
                text: "Username y Password requeridos",
                icon: "error"
            });
        }

        // Llamar a la función para iniciar sesion
        handlerLogin({ username, password })

        // Reiniciar el formulario a sus valores iniciales
        setLoginForm(initialLoginForm);
    }

    return (
        <div
            className="modal"
            tabIndex={-1}
            style={{ display: 'block' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>

                    <form
                        // Manejador de evento para el envío del formulario
                        onSubmit={onSumbit}
                    >
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                // Valor del campo vinculado al estado
                                value={username}
                                // Manejador de cambio para actualizar el estado
                                onChange={onInputChange} />
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                name="password"
                                type="password"
                                // Valor del campo vinculado al estado
                                value={password}
                                // Manejador de cambio para actualizar el estado
                                onChange={onInputChange} />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}