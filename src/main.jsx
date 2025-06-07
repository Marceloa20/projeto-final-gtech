import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-pink/theme.css'; // tema claro com rosa, combina com o layout
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


createRoot(document.getElementById('root')).render(
  <App />
)
