import React, { useContext } from 'react'
import { ThemeContext } from './ContextHooks'

const Component = () => {
    const darkTheme= useContext(ThemeContext);
    const themeStyle={
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        padding : '2rem',
        margin : '2rem'
    }
  return (
    <div>
        <div style={themeStyle}>Component</div>
    </div>
  )
}

export default Component