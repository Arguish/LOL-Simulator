import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './Context/Global.tsx';

const rootElement = document.getElementById('root');
if (rootElement != null) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <GlobalProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GlobalProvider>
        </React.StrictMode>
    );
} else {
    console.error('Elemento con ID "root" no encontrado.');
}
