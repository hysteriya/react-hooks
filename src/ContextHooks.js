// The useContext hook in React is a way for a component to access values from its parent component's context without passing them through props.

import React, { useState } from 'react'
import Component from './Component';

//to share the theme state  between all components.
export const ThemeContext = React.createContext()
const ContextHooks = () => {
    const [darkTheme, setDarkTheme]= useState(true);

    //updates the theme to not prevstates
    function toggleTheme(){
        setDarkTheme(prevDarkTheme=> !prevDarkTheme)
    }
  return (
    <div>
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme} >Toggle Theme</button>
            <Component/>
        </ThemeContext.Provider>
    </div>
  )
}

export default ContextHooks