import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp
            user={{ name: 'Pepe', lastname: 'Doe' }}
            id={1}
            title={'Hola Mundo'}
        />
    </React.StrictMode>,
);


