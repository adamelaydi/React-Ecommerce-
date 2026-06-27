// Hooks
import { createContext ,useState } from "react";
const Theme=createContext(null)
export default function ThemeProvider({children}){
const [theme,set]
return(
    <>
    <Theme.Provider>
        {children}
    </Theme.Provider>
    </>
)

}