// Hooks
import { createContext ,useState } from "react";
const Theme=createContext(null)
export default function ThemeProvider({children}){
const [theme,setTheme]=useState("light")

return(
    <>
    <Theme.Provider value={{theme,setTheme}}>
        {children}
    </Theme.Provider>
    </>
)

}