import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import './index.css';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={2500} />
    <App />
  </StrictMode>,
)