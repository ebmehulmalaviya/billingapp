import React, { useEffect, useState } from 'react';
import serviceImg from '../assets/member1.svg'
import { BsBoxes, BsBrowserChrome, BsBullseye, BsBarChartFill, BsBank, BsAndroid2 } from "react-icons/bs";
const Service = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const service = [
        { id: 1, title: 'Membership ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tincidunt lectus, ac dapibus neque. Integer vitae urna vitae dui tincidunt malesuada.', img: "/src/assets/member2.jpeg" },
        { id: 2, title: 'Another Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tincidunt lectus, ac dapibus neque. Integer vitae urna vitae dui tincidunt malesuada.', img: "/src/assets/member2.jpeg" },
        { id: 3, title: 'One More Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tincidunt lectus, ac dapibus neque. Integer vitae urna vitae dui tincidunt malesuada.', img: "/src/assets/member2.jpeg" }
      ];
    return (
        <div className='md:px-14 px-4 py-8 md:pb-16 max-w-screen-2xl mx-auto mt-20'>
                <div className='text-center my-8 md:pb-14'>
                    <h2 className='md:text-4xl text-3xl text-gray-600 font-semibold mb-2'>Our Client</h2>
                    <p className='text-gray-600'>We have been working with some Foutune 500+ Clients</p>
                    <div className='my-12 pt-6 flex md:flex-wrap  justify-between items-center gap-8 md:px-0 px-3 '>
                        <BsBoxes className='text-6xl text-gray-500' />
                        <BsBrowserChrome className='text-6xl text-gray-500' />
                        <BsBullseye className='text-6xl text-gray-500' />
                        <BsBarChartFill className='text-6xl text-gray-500' />
                        <BsBank className='text-6xl text-gray-500' />
                        <BsAndroid2 className='text-6xl text-gray-500' />
                    </div>
                </div>
             
            {/* service Card*/}
            <div className='mt-24 md:w-1/2 mx-auto text-center'>
                <h2 className='md:text-4xl text-3xl text-gray-600 font-semibold mb-3 '>Manage your entire community in a single system</h2>
                <p>who is Nextcent suitable for?</p>
            </div>
            {/* card */}
            <div className='mt-8 grid  md:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    service.map(service => <div key={service.id} className='px-4 py-8  text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-main-red transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl'>
                                <img src={serviceImg} className='-ml-5' alt='hello' />
                            </div>
                            <h4 className='text-2xl font-bold text-gray-600 mb-2 px-2 tracking-wide '>{service.title}</h4>
                            <p className='text-sm text-gray-600'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;