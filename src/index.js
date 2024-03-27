import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DelerAnimProvider } from './components/animation';
import { GameDeler } from './components/DelerConfig';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      
        <DelerAnimProvider>
          <App />
        </DelerAnimProvider>
      
    </React.StrictMode>
  );
  