import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UsersApp } from './UsersApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Habilitar las rutas definidas con React Router */}
        <BrowserRouter>
            {/* El componente principal UsersApp sera la pagina de inicio*/}
            <UsersApp />
        </BrowserRouter>
    </React.StrictMode>,
)
