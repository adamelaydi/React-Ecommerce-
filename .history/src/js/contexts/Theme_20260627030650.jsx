// Hooks
import { createContext } from "react";
const Theme=createContext(null)
export default function ThemeProvider({childre}){
return(
    <>
    <Theme.Provider>

    </Theme.Provider>
    </>
)

}