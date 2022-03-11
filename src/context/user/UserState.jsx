import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import useLocalStorage from "../../hooks/UseLocalStorage";

const UserState = ({children}) => {
    const [storedValue, setValue] = useLocalStorage("user", null);
    const state = {
        user: storedValue,
        setUser: setValue
    }
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;