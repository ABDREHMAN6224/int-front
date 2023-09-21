import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const ThemeContext=createContext()
const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState("dark")
    const [data,setData]=useState([])
    useEffect(()=>{
    const fetchData=async ()=>{
      const response=await fetch("http://localhost:3001/data")
      const got= await response.json();
      setData(got)
    }
    fetchData()
  },[])
    const handleTheme=()=>{
        theme=="dark"?setTheme("light"):setTheme("dark")
    }
  return (
    <ThemeContext.Provider value={{theme,handleTheme,data}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export const useThemeContext=()=>useContext(ThemeContext)