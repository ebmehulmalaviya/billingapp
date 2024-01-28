/* eslint-disable no-lone-blocks */
import { React, useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'


const Todo = () => {
    const params = useParams()
    const { name } = params
    let inputRef = useRef(null)
    let [count, SetCount] = useState(0);
    let [user, setUser] = useState('');
    let [password, setpassword] = useState('');

    {/* use useEffect   */ }
    useEffect(() => {
        console.log('call useEffect')
    });

    {/* use Ref   */ }
    const getRef = () => {
        inputRef.current.value = 'eb'
        console.log('get ref', inputRef.current.value);
    }

    {/* use controled input   */ }

    const getUserData = () => {
        console.log(`this user name is a ${user} and password is a ${password}`);
    }
    return (
        <div className='p-14 my-20 '>
       params name => {name}
            {/* usestate example  */}
            <div className='text-2xl'>count : {count}</div>
            <button onClick={() => SetCount(count + 1)} className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600'>+</button>
            <button disabled={count === 0} onClick={() => SetCount(count - 1)} className='m-4 px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600'>-</button>

            <br /> <br /> <hr /><br />
            {/* ref example  */}

            <input type='text' ref={inputRef} placeholder='user name' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" />
            <button onClick={getRef} className='mt-4 px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600'>Get Ref</button>
            <br /> <br /> <hr /><br />
            {/* controled components */}
            {user}  {password}
            <input type='text' value={user} onChange={(e) => setUser(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" /> <br />
            <input type='password' value={password} onChange={(e) => setpassword(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" /> <br />
            <button onClick={getUserData} className='mt-4 px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600'>Get Data</button>
        </div>
    );
};

export default Todo;