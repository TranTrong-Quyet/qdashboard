import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../src/index.css";

import App from './App'; // Centralized App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
