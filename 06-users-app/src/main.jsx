import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UsersApp } from './UsersApp'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Habilitar las rutas definidas con React Router */}
        <BrowserRouter>
            {/* Permitir el acceso al contexto AuthContext */}
            <AuthProvider>
                {/* El componente principal UsersApp sera la pagina de inicio*/}
                <UsersApp />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
