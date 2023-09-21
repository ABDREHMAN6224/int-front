import React, { Children, createContext, useContext, useState } from 'react'

const ThemeContext=createContext()
const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState("dark")
    const handleTheme=()=>{
        theme=="dark"?setTheme("light"):setTheme("dark")
    }
  return (
    <ThemeContext.Provider value={{theme,handleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export const useThemeContext=()=>useContext(ThemeContext)