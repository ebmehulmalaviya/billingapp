import React from 'react';

const Newsletter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen mx-auto bg-gray-200 py-16 md:mt-10'>
            <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                <div className='text-center'>
                    <h2 className='md:text-3xl text-2xl text-gray-600 font-semibold mb-6 lg:leading-snug tracking-wide'>
                        Pellentesque Suscipit fringilla libero eu.
                    </h2>
                    <div className='flex items-center justify-center gap-8'>
                        <button className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>Get a Demo</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;