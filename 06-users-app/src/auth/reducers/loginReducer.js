// Exportar la función reductora que manejará el estado de login
export const loginReducer = (state = {}, action) => {
  // Evaluar el tipo de acción utilizando una declaración switch
  switch (action.type) {
    // Caso para iniciar sesion
    case "login":
      // Retornar un nuevo estado con isAuth en true y el usuario desde action.payload
      return {
        isAuth: true,
        user: action.payload,
      };

    // Caso para cerrar sesion
    case "logout":
      // Retornar un nuevo estado con isAuth en false
      return {
        isAuth: false,
      };

    // Caso por defecto si la acción no coincide con ninguna de las definidas
    default:
      // Retornar el estado actual sin cambios
      return state;
  }
};
