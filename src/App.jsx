import React from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import Table from './components/Table'
import Footer from './components/Footer'
import { useThemeContext } from './themeContext'

const App = () => {
      const {theme}=useThemeContext();

  return (
    <div className={`app ${theme}`} >
    <Navbar/>
    <Info/>
    <Table/>
    <Footer/>
    </div>
  )
}

export default App