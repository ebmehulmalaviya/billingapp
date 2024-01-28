import React from 'react';
import Aboutimg from '../assets/about.svg'
import { AiOutlineFile, AiOutlineAudit, AiOutlineDeploymentUnit, AiOutlineCloudUpload } from "react-icons/ai";
const About = () => {
    return (
        <div className=' max-w-screen mx-auto my-8 md:mt-16 pt-24' >
            <div className='px-4 lg:px-14'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-10'>
                    <div className='md:w-1/2'>
                        <img src={Aboutimg} alt='img' />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h1 className='md:text-4xl text-2xl text-gray-600 font-semibold mb-4 md:w-4/5 tracking-wide '>
                            The unseen of spending three years at Pixelgrade
                        </h1>
                        <p className='md:-3/4 text-sm text-gray-600 mb-8'>We use ads to keep our content free for you.
                            Please allow ads and let sponsors fund your surfing.
                            Thank you! We use ads to keep our content free for you.
                            Please allow ads and let sponsors fund your surfing.
                            Thank you!</p>
                        <button className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>Lern More</button>
                    </div>
                </div>
            </div>
            {/*  company stats  */}

            <div className='px-4 md:px-14 max-w-screen mx-auto bg-gray-200 py-16'>
                <div className='md:px-20 mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='md:text-4xl text-3xl text-gray-600 font-semibold mb-4 md:w-2/3 tracking-wider'>Helping a Local <br>
                        </br>
                            <h1 className='text-main-red py-2'> business reinvent itself</h1>
                        </h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>


                    {/*   stats  */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <AiOutlineAudit className='text-4xl text-gray-600' />
                                <div>
                                    <h4 className='text-2xl text-gray-500 font-semibold'>2,22,234</h4>
                                    <p className='text-gray-600'>Members</p>
                                </div>

                            </div>
                            <div className='flex items-center gap-4'>
                                <AiOutlineCloudUpload className='text-4xl text-gray-600' />
                                <div>
                                    <h4 className='text-2xl text-gray-500 font-semibold'>8,11,231</h4>
                                    <p className='text-gray-600'>Event Booking</p>
                                </div>

                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <AiOutlineDeploymentUnit className='text-4xl text-gray-600' />
                                <div>
                                    <h4 className='text-2xl text-gray-500 font-semibold'>46,345</h4>
                                    <p className='text-gray-600'>Clubs</p>
                                </div>

                            </div>
                            <div className='flex items-center gap-4'>
                                <AiOutlineFile className='text-4xl text-gray-600' />
                                <div>
                                    <h4 className='text-2xl text-gray-500 font-semibold'>1,96,436</h4>
                                    <p className='text-gray-600'>Payments</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;