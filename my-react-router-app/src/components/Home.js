
import React from 'react';
import Hero1 from '../assets/hero.svg';
import Hero2 from '../assets/hero2.svg';
import Hero3 from '../assets/hero3.svg';
import { Carousel } from 'flowbite-react';
const home = () => {
    return (
        <div className='bg-white ' >
            <div className='px-4 lg:px-14 max-w-screen mx-auto  min-h-screen h-screen w-screen'>
                <Carousel className='w-full mx-auto '>
                    <div className=" my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <img src={Hero1} alt="" />
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='md:text-5xl text-3xl font-semibold md:mb-4 md:w-3/5 text-gray-600 hover:text-main-red'>
                                Lessons and insights  </h1>
                            <h1 className='text-main-red leading-snug md:text-5xl text-3xl  font-semibold mb-4 '>from 8 years</h1>
                            <p className='text-gray-600 text-base mb-8'>Where to grow your bussiness as a photographer: site or social media where to grow your bussiness as a photographer: site or social mediawhere to grow your bussiness as a photographer: site or social media </p>
                            <button className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                    </div>
                    <div className=" md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <img src={Hero2} alt="" />
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='md:text-5xl text-3xl  font-semibold md:mb-4 md:w-3/5 text-gray-600 hover:text-main-red'>
                                Lessons and insights  </h1>
                            <h1 className='text-main-red leading-snug md:text-5xl text-3xl  font-semibold mb-4 '>from 8 years</h1>
                            <p className='text-gray-600 text-base mb-8'>Where to grow your bussiness as a photographer: site or social media where to grow your bussiness as a photographer: site or social mediawhere to grow your bussiness as a photographer: site or social media </p>
                            <button className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <img src={Hero3} alt="" />
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='md:text-5xl text-3xl  font-semibold md:mb-4 md:w-3/5 text-gray-600 hover:text-main-red'>
                                Lessons and insights  </h1>
                            <h1 className='text-main-red leading-snug md:text-5xl text-3xl  font-semibold mb-4 '>from 8 years</h1>
                            <p className='text-gray-600 text-base mb-8'>Where to grow your bussiness as a photographer: site or social media where to grow your bussiness as a photographer: site or social mediawhere to grow your bussiness as a photographer: site or social media </p>
                            <button className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                    </div>


                </Carousel>
            </div>

        </div>
    );
};


export default home;