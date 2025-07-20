import { useContext } from 'react';

import logo from '../assets/logo.svg';
import signinIcon from "../assets/signin_icon.svg";
import UserContext from '../context/userContext';

function Header() {
    const { user } = useContext(UserContext);

    console.log("user", user);
    const isSigninPage = window.location.pathname === "/signin";

    const redirectToHome = () => {
        window.location.href = "/";
    }

    return (
        <div className='fixed top-0 left-0 w-full z-50 mx-auto px-[42px] py-[28px] pb-[16px] flex justify-between items-center bg-[#FFFFFF]'>
            <span className='flex items-center gap-2'>
                <img src={logo} alt="logo" />
                <p className='text-[16px] font-bold'>foo-rum</p>
            </span>

            {!isSigninPage ?
                (<span className='flex items-center gap-2'>
                    <p className='text-[14px] font-semibold'>Login</p>
                    <img src={signinIcon} alt="signin" />
                </span>
                )
                : <p onClick={redirectToHome} className='text-[14px] font-[600] text-[#000000] cursor-pointer'>Back to home</p>}
        </div>
    )
}

export default Header