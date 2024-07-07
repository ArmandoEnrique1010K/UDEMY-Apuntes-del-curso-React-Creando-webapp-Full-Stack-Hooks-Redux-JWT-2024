import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* El componente principal UsersApp sera la pagina de inicio*/}
        <UsersApp />
    </React.StrictMode>,
)
