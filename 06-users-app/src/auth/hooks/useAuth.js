// Importar los hooks useReducer y useNavigate, el reducer loginReducer, la libreria SweetAlert2 y la función de tipo helper loginUser
import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

// Definir los valores iniciales para el estado de login
const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

// Hook personalizado useAuth
export const useAuth = () => {
  // Inicializar el estado de login usando useReducer con loginReducer y initialLogin
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  // Definir navigate para redireccionar a otras rutas
  const navigate = useNavigate();

  // Función para manejar el login del usuario
  const handlerLogin = ({ username, password }) => {
    // Llamar a la función loginUser del servicio de autenticación para validar las credenciales
    const isLogin = loginUser({ username, password });

    // Si las credenciales son válidas
    if (isLogin) {
      // Crear un objeto de usuario simulado
      const user = { username: "admin" };

      // Despachar la acción de login con el payload del usuario
      dispatch({
        type: "login",
        payload: user,
      });

      // Guardar el estado de login en sessionStorage
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user,
        })
      );

      // Redirigir a la página de usuarios después de un login exitoso
      navigate("/users");
    } else {
      // Mostrar un mensaje de alerta si las credenciales son incorrectas
      Swal.fire({
        title: "Error Login",
        text: "Username o Password invalidos",
        icon: "error",
      });
    }
  };

  // Función para manejar el logout del usuario
  const handlerLogout = () => {
    // Despachar la acción de logout sin payload
    dispatch({
      type: "logout",
    });

    // Eliminar el estado de login en sessionStorage
    sessionStorage.removeItem("login");
  };

  // Retornar un objeto que contiene:
  // - login: el estado acutal de login
  // - handlerLogin: función para iniciar sesión
  // - handlerLogout: función para cerrar sesión
  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
