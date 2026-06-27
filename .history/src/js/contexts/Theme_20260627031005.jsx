// Hooks
import { createContext ,useState } from "react";
const Theme=createContext(null)
export function ThemeProvider({children}){
const [theme,setTheme]=useState( localStorage.getItem("theme") || "light")

return(
    <>
    <Theme.Provider value={{theme,setTheme}}>
        {children}
    </Theme.Provider>
    </>
)

}


export function useTheme()