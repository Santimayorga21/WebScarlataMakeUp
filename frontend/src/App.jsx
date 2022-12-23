import { useState } from 'react'
import "./assets/global.css"
import Home from './views/home/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './views/login/Login'
import About from './views/about/About'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Productos from './views/productos/Productos'

function App() {

  return (
    <div className= 'App'>
    <Routes>
      <Route element={<Footer />}>

        <Route element={<Navbar />}>
          <Route path='/'element={<Home />} />
          <Route path='/about'element={<About />} />
          <Route path='/productos'element={<Productos />} />
        </Route>
    
        <Route path='/login'element={<Login />} />  
        
      </Route>
    </Routes>
    </div>
  )
}

export default App
