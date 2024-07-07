// Importar los hooks useReducer y useState, el reducer usersReducer y la libreria SweetAlert2
import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

// Datos iniciales de usuarios
const initialUsers = [
  {
    id: 1,
    username: "pepe",
    password: "12345",
    email: "pepe@correo.com",
  },
];

// Valores iniciales para el formulario de usuarios
const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

// Hook personalizado useUsers
export const useUsers = () => {
  // Utilizar useReducer para manejar el estado de los usuarios
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  // Estado para el usuario seleccionado en el formulario
  const [userSelected, setUserSelected] = useState(initialUserForm);

  // Estado para controlar la visibilidad del formulario
  const [visibleForm, setVisibleForm] = useState(false);

  // Función para agregar o editar un nuevo usuario
  const handlerAddUser = (user) => {
    // Disparar la acción correspondiente con los datos del usuario
    dispatch({
      // Si el id es 0, se agrega un nuevo usuario; de lo contrario, se actualiza el usuario existente
      type: user.id === 0 ? "addUser" : "updateUser",
      // Datos del usuario que se pasarán como payload en la acción
      payload: user,
    });

    // Mensaje de alerta para indicar si un usuario ha sido creado o actualizado con éxito
    Swal.fire({
      // Titulo
      title: user.id === 0 ? "Usuario Creado" : "Usuario Actualizado",
      // Texto
      text:
        user.id === 0
          ? "El usuario ha sido creado con éxito!"
          : "El usuario ha sido actualizado con éxito!",
      // Icono
      icon: "success",
    });

    // Cerrar el formulario después de agregar o editar un usuario
    handlerCloseForm();
  };

  // Función para eliminar un usuario
  const handlerRemoveUser = (id) => {
    // Mensaje de alerta de confirmación para indicar si el usuario va a ser eliminado
    Swal.fire({
      title: "¿Está seguro que desea eliminar?",
      text: "¡Cuidado, el usuario será eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      // Función asociada al botón confirmar
      if (result.isConfirmed) {
        // Disparar la acción 'removeUser' con el id del usuario a eliminar
        dispatch({
          // Tipo de acción para eliminar un usuario
          type: "removeUser",
          // Dato del id a ser eliminado
          payload: id,
        });

        // Mensaje de alerta para indicar si el usuario ha sido eliminado con éxito
        Swal.fire({
          title: "Usuario Eliminado",
          text: "¡El usuario ha sido eliminado con éxito!",
          icon: "success",
        });
      }
    });
  };

  // Función para seleccionar un usuario del formulario para actualizar
  const handlerUserSelectedForm = (user) => {
    // Mostrar el formulario antes de seleccionar un usuario existente
    setVisibleForm(true);
    // Establecer el usuario seleccionado en el estado 'userSelected' con los datos del usuario pasado como parámetro
    setUserSelected({ ...user });
  };

  // Función para abrir el formulario
  const handlerOpenForm = () => {
    // Mostrar el formulario
    setVisibleForm(true);
  };

  // Función para cerrar el formulario
  const handlerCloseForm = () => {
    // Ocultar el formulario
    setVisibleForm(false);
    // Limpiar los campos del formulario reseteando el usuario seleccionado
    setUserSelected(initialUserForm);
  };

  // Retornar un objeto que contiene:
  // - users: el estado actual de la lista de usuarios
  // - userSelected: el estado del usuario seleccionado para editar
  // - initialUserForm: el formulario de usuario con valores iniciales
  // - visibleForm: el estado de la visibilidad del formulario
  // - handlerAddUser: función para agregar o actualizar un usuario
  // - handlerRemoveUser: función para eliminar un usuario
  // - handlerUserSelectedForm: función para seleccionar un usuario y cargar sus datos en el formulario
  // - handlerOpenForm: función para abrir el formulario
  // - handlerCloseForm: función para cerrar el formulario
  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  };
};
