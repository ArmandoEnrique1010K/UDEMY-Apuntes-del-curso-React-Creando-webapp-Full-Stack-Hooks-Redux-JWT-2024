// Importar el componente UserForm
import { UserForm } from "./UserForm";

// Componente funcional UserModalForm
// Recibe las propiedades desestructuradas userSelected,initialUserForm, handlerAddUser y handlerCloseForm
export const UserModalForm = ({ userSelected, initialUserForm, handlerAddUser, handlerCloseForm }) => {

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
                            {/* Renderizar el componente UserForm pasando las propiedades initialUserForm, userSelected, handlerAddUsers y handlerCloseForm */}
                            <UserForm
                                initialUserForm={initialUserForm}
                                userSelected={userSelected}
                                handlerAddUser={handlerAddUser}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
