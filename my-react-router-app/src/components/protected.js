/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function componentName(props) {
    const { Component } = props
    const navigate = useNavigate()

    useEffect(() => {
        const getToken = localStorage.getItem('LoginToken');
        if (!getToken) {
            navigate('/login')
        }
    })
    return (
        <div className='pt-24'>
            <Component />
        </div>
    )
}

export default componentName
