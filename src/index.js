import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from "react-modal-hook";
import App from './Pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);


