// Importar los hooks useEffect y useState, y la libreria SweetAlert2
import { useEffect, useState } from "react"
import Swal from "sweetalert2";

// Componente funcional UserForm
// Recibe las propiedades desestructuradas userSelected,initialUserForm, handlerAddUser y handlerCloseForm
export const UserForm = ({ userSelected, initialUserForm, handlerAddUser, handlerCloseForm }) => {

    // Estado local para el formulario de usuarios
    const [userForm, setUserForm] = useState(initialUserForm);

    // Desestructuración de los campos del formulario desde el estado
    const { id, username, password, email } = userForm

    // Hook useEffect para actualizar el formulario cuando se selecciona un usuario
    useEffect(() => {

        // Establecer los valores del formulario con los datos del usuario seleccionado
        setUserForm({
            // Copiar los valores del usuario seleccionado
            ...userSelected,
            // Inicializar el campo de password como vacío
            password: ''
        });

        // Dependencia: se ejecuta cuando 'userSelected' cambia
    }, [userSelected]);

    // Función para manejar cambios en los campos del formulario
    const onInputChange = ({ target }) => {

        // Extraer el nombre y el valor del campo de entrada
        const { name, value } = target

        // Actualizar el estado del formulario con el nuevo valor
        setUserForm({
            // Mantener los valores existentes del formulario
            ...userForm,
            // Actualizar el campo específico con su nuevo valor
            [name]: value,
        })

    }

    // Función para manejar el envío del formulario
    const onSubmit = (event) => {

        // Prevenir la recarga de la página al enviar el formulario
        event.preventDefault();

        // Validar que todos los campos del formulario estén completos
        // Validar el campo password si el id es 0 (crear usuario)
        if (!username || (!password && id === 0) || !email) {
            // Mostrar un mensaje de alerta si algún campo está vacío
            Swal.fire({
                title: "Error de validación",
                text: "¡Debe completar los campos del formulario!",
                icon: "error"
            });
            return;
        }

        // Validar que el campo email incluya el caracter "@""
        if (!email.includes('@')) {
            Swal.fire({
                title: "Error de validación email",
                text: "El email debe ser valido, incluir un @!",
                icon: "error"
            });
            return;
        }

        // Llamar a la función para agregar el usuario
        handlerAddUser(userForm)

        // Reiniciar el formulario a sus valores iniciales
        setUserForm(initialUserForm);

    }

    // Función para manejar el cierre del formulario
    const onCloseForm = () => {

        // Llamar a la función para cerrar el formulario
        handlerCloseForm();

        // Reiniciar el formulario a sus valores iniciales
        setUserForm(initialUserForm);

    };

    return (
        <form
            // Manejador de evento para el envío del formulario
            onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                // Valor del campo vinculado al estado
                value={username}
                // Manejador de cambio para actualizar el estado
                onChange={onInputChange}
            />
            {
                // Renderizar el campo password solo si el id es 0 (crear usuario)
                id > 0 || (
                    <input
                        className="form-control my-3 w-75"
                        placeholder="Password"
                        type="password"
                        name="password"
                        // Valor del campo vinculado al estado
                        value={password}
                        // Manejador de cambio para actualizar el estado
                        onChange={onInputChange}
                    />
                )
            }
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                // Valor del campo vinculado al estado
                value={email}
                // Manejador de cambio para actualizar el estado
                onChange={onInputChange}
            />
            <input
                type="hidden"
                name="id"
                // Valor del campo vinculado al estado
                value={id}
            />
            <button
                className="btn btn-primary"
                type="submit">
                {
                    // Si el valor del campo id es mayor que 0, el texto del boton será "editar". De lo contrario, "crear"
                    id > 0 ? 'Editar' : 'Crear'
                }
            </button>
            {/* Botón para cerrar el formulario */}
            {
                // Si el valor de la propiedad handlerCloseForm es undefined no se mostrara el botón
                !handlerCloseForm || <button
                    className="btn btn-primary mx-2"
                    type="button"
                    // Manejador de evento al pulsar el boton, se invoca la función onCloseForm
                    onClick={onCloseForm}>
                    Cerrar
                </button>
            }
        </form>
    )
}
