import {  } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import Exemplo1 from './Exemplo1'
import Exemplo2 from './Exemplo2'
import Exemplo3 from './Exemplo3'
import Footer from './Footer'
import Home from './Home'
import Exemplo4 from './Exemplo4'
import Exemplo5 from './Exemplo5'
import Exemplo6 from './Exemplo6'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Exemplo1" element={<Exemplo1/>} />
      <Route path="/Exemplo2" element={<Exemplo2/>} />
      <Route path="/Exemplo3" element={<Exemplo3/>} />
      <Route path="/Exemplo4" element={<Exemplo4/>} />
      <Route path="/Exemplo5" element={<Exemplo5/>} />
      <Route path="/Exemplo6" element={<Exemplo6/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
