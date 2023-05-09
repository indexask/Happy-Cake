import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'

import Contacto from "./views/Contacto"
import Home from "./views/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div className='container'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      </div>
      </BrowserRouter>

    </div>
  )
}

export default App
