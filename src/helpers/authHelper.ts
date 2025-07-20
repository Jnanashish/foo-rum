const demoUsers = [
    {
        email: "demo@example.com",
        password: "password123",
        name: "Demo User",
        profilePicture: "https://via.placeholder.com/150",
    },
    {
        email: "test@user.com",
        password: "testpass",
        name: "Test User",
        profilePicture: "https://via.placeholder.com/150",
    },
];

// authenticate user in case of sign in
export const authenticateUser = (email: string, password: string) => {
    const user = demoUsers.find((user) => user.email === email && user.password === password);
    if (!!user) {
        window.location.href = "/";
        return true;
    } else {
        // check if user is already in local storage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.email === email && userData.password === password) {
                sessionStorage.setItem("userSession", JSON.stringify(userData));
                window.location.href = "/";
                return true;
            }
            return false;
        } else {
            console.log("User not found");
            return false;
        }
    }
}

// store user details in local storage in case of sign up
export const storeUserDetails = (email: string, password: string) => {
    const userData = {
        email,
        password,
        isAuthenticated: true,
        profilePicture: "https://via.placeholder.com/150",
    }
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.href = "/";
}