// Importar los hooks useState, useEffect y useParams, y el componente UserForm
import { useEffect, useState } from "react"
import { UserForm } from "../components/UserForm"
import { useParams } from "react-router-dom";

// Pagina web funcional RegisterPage
// Recibe las propiedades desestructuradas users (por defecto se define un arreglo vacio), initialUserForm y handlerAddUser
export const RegisterPage = ({ users = [], initialUserForm, handlerAddUser }) => {

    // Estado para el usuario seleccionado en el formulario
    const [userSelected, setUserSelected] = useState(initialUserForm);

    // Obtener el parámetro 'id' de la URL utilizando el hook useParams
    const { id } = useParams();

    // useEffect se ejecuta cuando el valor de 'id' cambia
    useEffect(() => {

        // Imprimir el 'id' en la consola para depuración
        console.log(id);

        // Si el id existe y no es undefined
        if (id) {

            // Buscar el usuario en la lista 'users' que coincida con el 'id' de la URL. Si no se encuentra, usar 'initialUserForm' como valor por defecto
            const user = users.find(u => u.id == id) || initialUserForm;

            // Establecer el estado 'userSelected' con el usuario encontrado o el formulario inicial
            setUserSelected(user);

        }

        // El efecto se vuelve a ejecutar cada vez que 'id' cambia
    }, [id])

    return (
        <div className="container my-4">
            <h4>{userSelected.id > 0 ? 'Editar' : 'Registrar'} Usuario</h4>
            <div className="row">
                <div className="col">
                    {/* Renderizar el componente UserForm, pasando las propiedades userSelected, initialUserForm y handlerAddUser */}
                    <UserForm
                        userSelected={userSelected}
                        initialUserForm={initialUserForm}
                        handlerAddUser={handlerAddUser}
                    />
                </div>
            </div>
        </div>
    )
} 
