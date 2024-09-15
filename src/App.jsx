import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
            <div className='container'> 
                <Navbar />
                
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/project/:id" element={<Project />}/>
                </Routes>
            </div>
        </BrowserRouter>
  )
}

export default App