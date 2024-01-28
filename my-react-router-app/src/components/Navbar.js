import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsisSticky] = useState(false)
    const [isLogin, setIsLogin] = useState()
    const navigate = useNavigate()

    // set Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const Logout = () => {
        localStorage.removeItem('LoginToken');
        navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const getToken = localStorage.getItem('LoginToken');
        setIsLogin(getToken)
        const hendeleScroll = () => {
            if (window.scrollY > 100) {
                setIsisSticky(true)
            } else {
                setIsisSticky(false)
            }
        };
        window.addEventListener('scroll', hendeleScroll)

        return () => {
            window.removeEventListener('scroll', hendeleScroll)
        }
    })

    // navitems array 

    const navitems = [
        { link: "Home", path: "/" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testmonial", path: "testmonial" },
        { link: "FAQ", path: "faq" },
        { link: "Function", path: "todo" },
        { link: "Class", path: "class" },
        { link: "Dynamic", path: "dynamic" },
    ]
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0' >
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border-b-2 bg-white duration-300 ' : ''}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <h4 className='text-main-red text-2xl cursor-pointer' >Emperor Brains</h4>

                    {/* navbar link */}
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {navitems.map(({ link, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className='block text-base cursor-pointer text-gray-900 hover:text-main-red focus:text-main-red active:text-main-red'
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>


                    {/* button large device*/}
                    <div className='space-x-12 hidden lg:flex item-center'>
                        {
                            isLogin ? (<div className='flex'>
                                <button onClick={() => Logout()} className='pt-2 px-4 hidden lg:flex item-center hover:text-main-red'>Logout</button>
                                <button className='bg-gray-900 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-main-red'>Sign up</button>
                            </div>) : ''
                        }


                    </div>

                    {/* menu btn for only mobile device*/}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='focus:outline-none focus:text-main-red'>
                            {
                                isMenuOpen ? <FaXmark className='w-6 h-6 text-gray-600' /> : <FaBars className='h-6 w-6 text-gray-600' />
                            }
                        </button>
                    </div>

                </div>
                {/* navbar link for mobile */}

                <div className={`space-y-4 px-4 mt-16 py-7 bg-main-red ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                    {
                        navitems.map(({ link, path }) => <Link key={path} activeClass="text-main-red" spy={true} smooth={true} offset={-100} to={path} className='block text-base text-white hover:text-gray-900'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    );
}

export default Navbar;