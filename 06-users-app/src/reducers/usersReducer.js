// Exportar la función reductora que manejará el estado de los usuarios
export const usersReducer = (state = [], action) => {
  // Evaluar el tipo de acción utilizando una declaración switch
  switch (action.type) {
    // Caso para añadir un nuevo usuario
    case "addUser":
      // Retornar un nuevo estado que incluye todos los usuarios actuales y el nuevo usuario
      return [
        // Mantener los usuarios existentes en el estado
        ...state,
        {
          // Agregar los datos del nuevo usuario proporcionados en action.payload
          ...action.payload,
          // Generar un ID único basado en la fecha y hora actual
          id: new Date().getTime(),
        },
      ];

    // Caso para eliminar usuario
    case "removeUser":
      // Retornar un nuevo estado que excluye el usuario con el id proporcionado
      return state.filter(
        (user) =>
          // Incluir solo los usuarios cuyo id no coincida con el id proporcionado en action.payload
          user.id !== action.payload
      );

    // Caso para actualizar usuario
    case "updateUser":
      // Devolver un nuevo arreglo de usuarios con los cambios aplicados al usuario correspondiente
      return state.map((u) => {
        // Verificar si el id del usuario actual coincide con el id del usuario en action.payload
        if (u.id === action.payload.id) {
          // Retornar una nueva instancia del usuario con los datos actualizados
          return {
            // Mantener los demás datos del usuario actualizados
            ...action.payload,
            // Mantener el password del usuario sin cambios
            password: u.password,
          };
        }
        // Si no coincide, retornar el usuario sin cambios
        return u;
      });

    // Caso por defecto si la acción no coincide con ninguna de las definidas
    default:
      // Retornar el estado actual sin cambios
      return state;
  }
};
