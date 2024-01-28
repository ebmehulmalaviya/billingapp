import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [name, setname] = useState()
    const [Password, setPassword] = useState()
    const navigate = useNavigate()


    const getUserData = (e) => {
        e.preventDefault();
        localStorage.setItem('LoginToken', true);
        const getToken = localStorage.getItem('LoginToken');
        if (getToken) {
            navigate('/')
        }
    }
    useEffect(() => {
        const getToken = localStorage.getItem('LoginToken');
        if (getToken) {
            navigate('/')
        }
    })
    return (
        <div className='pt-24'>
            {/* From  */}
            <form className='py-20 w-1/2 mx-auto '>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        User
                    </span>
                    <input
                        type="text"
                        name="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="you@example.com"
                    />
                </label>
                <label className="block mt-10">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input
                        type="email"
                        name="email"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Password"
                    />
                </label>
                <div className='mt-10'>
                    <button type='submit' onClick={getUserData} className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>
                        Login
                    </button>
                    {/* <button type='submit' onClick={updateUser} className='px-7 mx-3  py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>
                        Update
                    </button> */}
                </div>
            </form>
        </div>
    )
}

export default Login
