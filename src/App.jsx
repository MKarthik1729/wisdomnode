import React from 'react'
import styles from './App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ML from './Components/MachineLearning/ML'
import HelloWorld from './Components/TODO/HelloWorld'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={ML} />
      <Route path='/statml' Component={HelloWorld} />
    </Routes>
    </BrowserRouter>
  )
}

export default App