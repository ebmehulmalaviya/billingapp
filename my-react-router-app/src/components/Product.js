import React from 'react';
import produtsimg from '../assets/products.svg'
const Product = () => {
    return (
        <div className='px-4 lg:px-14 pt-28'>
        <div className='md:w-11/12 py-10 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-10'>
            <div className='md:w-1/2'>
                <img src={produtsimg} alt='img' />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h1 className='md:text-4xl text-2xl text-gray-600 font-semibold mb-4 md:w-4/5 tracking-wide '>
                    How to design your site footer like we did
                </h1>
                <p className='md:-3/4 text-sm text-gray-600 mb-8'>We use ads to keep our content free for you.
                    Please allow ads and let sponsors fund your surfing.
                    Thank you! We use ads to keep our content free for you.
                    Please allow ads and let sponsors fund your surfing.
                    Thank you! Please allow ads and let sponsors fund your surfing.
                    Thank you! We use ads to keep our content free for you.
                    Please allow ads and let sponsors fund your surfing.
                    Thank you! Please allow ads and let sponsors fund your surfing.
                    Thank you! We use ads to keep our content free for you.
                    Please allow ads and let sponsors fund your surfing.
                    Thank you! Please allow ads and let sponsors fund your surfing.
                    Thank you! We use ads to keep our content free for you.
                    Please allow ads and let sponsors fund your surfing.
                    Thank you!</p>
                <button className='px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600 transition-all duration-300 hover:-translate-y-4'>Lern More</button>
            </div>
        </div>
    </div>
    );
};

export default Product;