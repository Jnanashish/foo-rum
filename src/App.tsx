import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { useEffect, useState } from 'react';

import Home from './page/home';
import Header from './components/Header';
import Signin from './page/signin';

function App() {
    const [userValue, setUserValue] = useState(null);
    useEffect(() => {
        const user = sessionStorage.getItem("userSession");
        if (!!user) {
            setUserValue(JSON.parse(user));
        }
    }, []);

    return (
        <UserProvider value={{ user: userValue }}>
            <Header />

            <Router>
                <div className="min-h-screen bg-[#FFFFFF] flex flex-col mb-[100px]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
