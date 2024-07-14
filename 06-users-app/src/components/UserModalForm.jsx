// Importar el hook useContext, el componente UserForm y el contexto UserContext
import { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/UserContext";

// Componente funcional UserModalForm
export const UserModalForm = () => {

    // Obtener las propiedades userSelected y handlerCloseForm desde el contexto UserContext
    const { userSelected, handlerCloseForm } = useContext(UserContext);

    return (
        <div className="abrir-modal animacion fadeIn">
            <div
                className="modal"
                tabIndex={-1}
                style={{ display: "block" }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {/* Si el id del estado userSelected es mayor que 0, se mostrara "Editar"; de lo contrario, "Crear" */}
                                {userSelected.id > 0 ? 'Editar ' : 'Crear '} Modal Usuarios
                            </h5>
                        </div>
                        <div className="modal-body">
                            {/* Renderizar el componente UserForm pasando las propiedades userSelected y handlerCloseForm */}
                            <UserForm
                                userSelected={userSelected}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
