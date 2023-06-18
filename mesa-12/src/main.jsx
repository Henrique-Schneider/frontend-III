import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Home from './Home'
import './index.css'
import Contact from './Contact'
import Beer from './Beer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter>
<Routes>

<Route path="/" element={<App />} >

  <Route path="/home" element={<Home />} />
  <Route path="/beer/:id" element={<Beer />} />
  <Route path="/contact" element={<Contact/>} />
  
</Route>

</Routes>


</BrowserRouter>
    
  </React.StrictMode>
)