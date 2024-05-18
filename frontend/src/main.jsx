import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthProvider';
import { MaterialTailwindControllerProvider } from "@/context";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MaterialTailwindControllerProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MaterialTailwindControllerProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)