import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar'
import Home from './Home';
import Aboute from './Aboute';
import Contact from './Contact';
import NoPage from './NoPage';
import Other from './Other';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

     <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboute" element={<Aboute/>} />
          <Route path="contact" element={<Contact />} />
          <Route path='other' element={<Other/>}/>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
