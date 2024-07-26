import React, { useState, startTransition } from 'react';
import { Link } from 'react-router-dom';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {


    const [loginState, setLoginState] = useState({        
        email: "",
        password: ""    
    })


    const inputHandle = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(loginState);

    } 
    

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] bg-[#6f68d1] text-[#ffffff] p-6 rounded-md'>
                <h1 className='text-center text-2xl mb-4 font-bold'>Login Page</h1>
                <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                <p className='text-sm mb-6'>Please sign in to your account</p>

                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4 mb-6'>
                        <div>
                            <label htmlFor="email" className='font-medium'>Email</label>
                            <input
                                onChange={inputHandle}
                                value={loginState.email}
                                className='px-3 py-2 w-full outline-none border border-slate-400 bg-transparent rounded-md'
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email' 
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className='font-medium'>Password</label>
                            <input
                                onChange={inputHandle}
                                value={loginState.password}
                                className='px-3 py-2 w-full outline-none border border-slate-400 bg-transparent rounded-md'
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Password' 
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='bg-slate-800 w-full text-white rounded-md px-7 py-2 mb-6 hover:shadow-lg hover:shadow-blue-300'
                    >
                        Sign In
                    </button>

                    <div className='flex items-center justify-center mb-6'>
                        <p className='text-sm'>Don't have an account? <Link className='font-bold text-blue-500' to="/register">Sign Up</Link></p>
                    </div>

                    <div className='flex items-center mb-6'>
                        <div className='w-full flex items-center'>
                            <div className='flex-grow bg-slate-700 h-[1px]'></div>
                            <span className='mx-3 text-sm'>Or</span>
                            <div className='flex-grow bg-slate-700 h-[1px]'></div>
                        </div>
                    </div>

                    <div className='flex justify-center gap-3'>
                        <div className='w-[135px] h-[35px] flex items-center justify-center rounded-md bg-orange-700 shadow-lg hover:shadow-orange-500 cursor-pointer'>
                            {/* <FaGoogle className='text-white' /> */}
                        </div>

                        <div className='w-[135px] h-[35px] flex items-center justify-center rounded-md bg-blue-700 shadow-lg hover:shadow-blue-500 cursor-pointer'>
                            {/* <FaFacebook className='text-white' /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
