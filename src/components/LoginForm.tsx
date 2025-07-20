import React, { useState } from 'react'
import signinIcon from "../assets/signin_icon.svg";
import FormInput from './FormInput';
import { authenticateUser, storeUserDetails } from '../helpers/authHelper';

const LoginForm = () => {
    const [isSignin, setIsSignin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isUserValid, setIsUserValid] = useState<boolean | null>(null);

    const [error, setError] = useState({
        email: false,
        password: false,
        repeatPassword: false,
    });

    const onSubmitButtonClick = () => {
        let newError = { ...error };
        if (email === "") {
            newError.email = true;
        }
        if (password === "") {
            newError.password = true;
        }
        if (!isSignin && repeatPassword === "") {
            newError.repeatPassword = true;
        }
        setError(newError);

        // for sign in page
        if (isSignin && !error.email && !error.password) {
            setIsUserValid(authenticateUser(email, password));

        } else if (!isSignin && !error.email && !error.password && !error.repeatPassword) {
            // store user details in local storage in case of sign up
            storeUserDetails(email, password);
        } 
    }

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsUserValid(null);
        setError({ ...error, email: false });
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setIsUserValid(null);
        setError({ ...error, password: false });
    }

    const onRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
        setIsUserValid(null);
        setError({ ...error, repeatPassword: false });
    }

    return (
        <div className='w-[498px] max-h-[740px] bg-[#EBEBEB] rounded-[30px] p-[11px] overflow-auto'>
            <div className='w-full h-full bg-white rounded-[21px] shadow-[0px_4px_15px_0px_#00000008]'>
                <div className='w-full h-full flex flex-col items-center justify-start'>
                    <span className='mt-[40px] w-[53px] h-[53px] rounded-full bg-[#F8F8F8] flex items-center justify-center'>
                        <img className='w-[24px] h-[24px] mr-[4px]' src={signinIcon} alt="signin icon" />
                    </span>

                    <p className='text-[20px] font-[700] mt-[20px]'>{isSignin ? "Sign in to continue" : "Create an account to continue"}</p>
                    <p className='text-[14px] font-normal text-[#0000007A] mt-[6px]'>{isSignin ? "Sign in to access all the features on this app" : "Create an account to access all the features on this app"}</p>


                    <div className='w-[80%] mt-[46px] mb-[20px]'>
                        <p className='text-[14px] font-[600] text-[#000000] mb-[8px] ml-[4px]'>Email or username</p>
                        <FormInput placeholder="Enter your email or username" type="text" value={email} onChange={onEmailChange} />
                        {error.email && <p className='text-[12px] font-[400] ml-[2px] text-[#FF0000] mt-[4px]'>Email is required</p>}
                    </div>

                    <div className='w-[80%] mb-[26px]'>
                        <p className='text-[14px] font-[600] text-[#000000] mb-[8px] ml-[4px]'>Password</p>
                        <FormInput placeholder="Enter your password" type="password" value={password} onChange={onPasswordChange} />
                        {error.password && <p className='text-[12px] font-[400] ml-[2px] text-[#FF0000] mt-[4px]'>Password is required</p>}
                    </div>

                    {!isSignin && (
                        <div className='w-[80%] mb-[26px]'>
                            <p className='text-[14px] font-[600] text-[#000000] mb-[8px] ml-[4px]'>Repeat Password</p>
                            <FormInput placeholder="Enter your password again" type="password" value={repeatPassword} onChange={onRepeatPasswordChange} />
                            {error.repeatPassword && <p className='text-[12px] ml-[2px] font-[400] text-[#FF0000] mt-[4px]'>Password is required</p>}
                        </div>
                    )}

                    {isUserValid === false && <p className='text-[12px] text-center font-[400] mb-[8px] text-[#FF0000] '>Invalid email or password</p>}

                    <button onClick={onSubmitButtonClick} className='mb-[60px] w-[80%] bg-[#5057EA] rounded-[11px] h-[50px] text-[14px] font-[600] text-[#FFFFFF]'>{isSignin ? "Sign in" : "Sign up"}</button>

                </div>
            </div>
            {
                !isSignin ?
                    <p className='text-[14px] font-[500] text-[#00000099] text-center mt-[20px] mb-[8px]'>
                        <span>Already have an account?</span>
                        <span onClick={() => setIsSignin(true)} className='text-[#5057EA] cursor-pointer ml-[6px] font-[600]'>Sign In</span></p>
                    :
                    <p className='text-[14px] font-[500] text-[#00000099] text-center mt-[20px] mb-[8px]'>
                        <span>Don't have an account?</span>
                        <span onClick={() => setIsSignin(false)} className='text-[#5057EA] cursor-pointer ml-[6px] font-[600]'>Sign Up</span></p>
            }
        </div>
    )
}

export default LoginForm;