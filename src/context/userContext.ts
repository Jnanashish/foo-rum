import { createContext } from "react";

// Define the User interface based on the structure used in authHelper
interface User {
    email: string;
    password: string;
    name?: string;
    profilePicture?: string;
    isAuthenticated?: boolean;
}

// Define the UserContext interface
interface UserContextType {
    user: User | null;
}

const UserContext = createContext<UserContextType>({
    user: null,
});

export const UserProvider = UserContext.Provider;

export default UserContext;
export type { User, UserContextType };