import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import UserProvider from './contexts/userProvider.tsx';
import TransactionProvider from './contexts/transactionProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <UserProvider>
        <TransactionProvider>
          <App />
        </TransactionProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
