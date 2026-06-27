// Hooks
import { createContext ,useContext,useState } from "react";
export function ThemeProvider({children}){
    const [theme,setTheme]=useState( localStorage.getItem("theme") || "light")
    const Theme=createContext(null)

return(
    <>
    <Theme.Provider value={{theme,setTheme}}>
        {children}
    </Theme.Provider>
    </>
)

}


export function useTheme(){
    return useContext(Theme)
}