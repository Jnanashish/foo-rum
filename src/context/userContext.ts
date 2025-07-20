import { createContext } from "react";

const UserContext = createContext({
    user: null,
    setUser: (user: any) => {}
});

export const UserProvider = UserContext.Provider;

export default UserContext;