import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './Context/AuthContext.jsx'
import userContext from './Context/UserContext.jsx'
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <AuthContext>
      <userContext>
      <App />
      </userContext>

     
    </AuthContext>
  </BrowserRouter>
);
