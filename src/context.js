import React, {useState  ,createContext} from 'react'


export const ThemeContext = createContext();


const ModeContext = ({children})=>{
  const [theme, setTheme] = useState({
    icon: 'black',
    title: 'black',
    backgorund: 'white'
  })
  return(
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ModeContext