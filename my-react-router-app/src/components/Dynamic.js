/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loadder from '../assets/ajax-loader.gif';
import User from './user'
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
const Dynamic = () => {
    let [name, setname] = useState()
    let [email, setemail] = useState()
    let [userId, setuserId] = useState()
    let [userList, setUser] = useState(null)
    let [err, setErr] = useState()
    useEffect(() => {
        fetchData();
    }, [])

    {/* get api call */ }
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/userData');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setUser(data);
        } catch (error) {
            setErr('Error fetching data status 404');
            console.log('err', err);
        }
    };

    {/* post api call */ }

    const getUserData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/userData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            });
            const data = await response.json();
            setname('')
            setemail('')
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    {/* delete api call */ }

    const remove = async (id) => {
        console.log('remove is', id);
        try {
            const response = await fetch(`http://localhost:3000/userData/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log(`Todo with ID ${id} has been deleted.`);
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    {/* edite api call */ }

    const edit = (id) => {
        console.log('userList[id]', userList[id - 1]);
        setname(userList[id - 1].name)
        setemail(userList[id - 1].email)
        setuserId(userList[id - 1].id)
    }

    const updateUser = async (e) => {
        e.preventDefault()
        let updateList = { name, email, userId }
        console.log('updateList', updateList);
        try {
            const response = await fetch(`http://localhost:3000/userData/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            });
            const data = await response.json();
            setname('')
            setemail('')
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <div className='p-10 my-20 '>
            {userList ?
                <div>
                    {userList && <div>
                        <table className="border-collapse border w-full">
                            <thead>
                                <tr>
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {userList.map((user, index) => (
                                    <tr key={index} className="border">
                                        <td className="border p-2">{user.name}</td>
                                        <td className="border p-2">{user.email}</td>
                                        <td className="border p-2 flex items-center justify-center">
                                            <Link to={`/user/${user.name}/${user.email}`} className='px-8'>
                                                View
                                            </Link>
                                            <button type='button' onClick={() => remove(user.id)} className='text-red-500 px-3'>
                                                <MdDeleteOutline className='text-2xl' />
                                            </button>
                                            <button type='button' onClick={() => edit(user.id)} className='text-gray-900'>
                                                <MdOutlineEdit className='text-2xl' />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>}</div>
                : err
                    ?
                    <h1 className='text-4xl text-red-400 text-center'>{err}</h1>
                    : <div className='flex justify-center text-4xl text-gray-800'><span>Data Loadding</span><img className='w-10 h-3 mt-7' src={Loadder} /></div>
            }

            <>
                <Routes>
                    <Route path="/user/:id/:name" element={<User />} />
                </Routes>
            </>

            {/* From  */}
            <form className='py-20 w-1/2 mx-auto'>
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
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Password"
                    />
                </label>
                <div className='mt-10'>
                    <button type='submit' onClick={getUserData} className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>
                        Login
                    </button>
                    <button type='submit' onClick={updateUser} className='px-7 mx-3  py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>
                        Update
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Dynamic;