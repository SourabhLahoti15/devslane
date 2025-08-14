import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from './UserContextProvider';
import AlertContextProvider from './AlertContextProvider.jsx';
import CartContextProvider from './CartContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AlertContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </AlertContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
