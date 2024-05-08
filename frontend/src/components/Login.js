import React, { useState } from 'react'
import Register from './Register'
// import {useDispatch, useSelector} from "react-redux";
import { API_END_POINT } from '../utils/contact';
import axios from 'axios'

const Form = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const isLoading = useSelector(store=>store.app.isLoading);

    const loginHandler = () => {
        setIsLogin(!isLogin);
    };

    const getInputData = async(e) => {
        e.preventDefault();
        if (isLogin) {
            // Login
            const user = { email, password }
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user)
            } catch (error) {
                console.log("An Error Occured ...")
            }
        } else {
            // Register
            const user = { name, email, password }
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        // setFullName("");
        // setEmail("");
        // setPassword("");
    }

    return (
        <>
            <div>
                <Register />
                <div className='absolute'>
                    <img className='w-[100vw]' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
                </div>
                <form onClick={ getInputData } className='flex flex-col w-3/12 p-10 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
                    <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
                    <div className='flex flex-col'>
                        {
                            !isLogin && <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                        }
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                        <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin ? "Login" : "Sign Up"}</button>
                        <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
