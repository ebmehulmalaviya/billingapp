/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useParams} from 'react-router-dom'
const user = () => {
    const params =useParams()
    return (
        <div className='p-10 my-20'>
            <div className='text-center text-5xl w-1/4 py-4 rounded-lg text-gray-700 mx-auto bg-green-300'>
            <h3 className='pb-5 text-2xl'>name {params.id}</h3>
            <h3 className='text-2xl'>Email {params.name}</h3>
            </div>
        </div>
    );
};

export default user;