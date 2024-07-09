// Función para validar las credenciales de inicio de sesión. Recibe un objeto userLogin con las propiedades username y password
export const loginUser = (userLogin) => {
  // Verifica si las credenciales coinciden con las credenciales de prueba. Retorna true si las credenciales son correctas, de lo contrario, retorna false
  return userLogin.username === "admin" && userLogin.password === "12345";
};
