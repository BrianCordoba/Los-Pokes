
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "../node_modules/nes.css/css/nes.css"
import { BrowserRouter } from "react-router-dom";





ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);