import React from 'react'
import styles from './App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Display from './Components/Home/Display'
import HelloWorld from './Components/TODO/HelloWorld'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Display} />
      <Route path='/jee/maths/problems' Component={MathsProblems} />
      <Route path='/jee/maths/theory' Component={MathsTheory} />
      <Route path='/jee/physics/problems' Component={PhysicsProblems} />
      <Route path='/jee/physics/theory' Component={PhysicsTheory} />
    </Routes>
    </BrowserRouter>
  )
}

export default App