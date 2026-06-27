// Hooks
import { createContext } from "react";
const Theme=createContext(null)
export default function ThemeProvider({children}){
return(
    <>
    <Theme.Provider>
    {}
    </Theme.Provider>
    </>
)

}