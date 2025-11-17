import React from 'react'
import { FiCoffee } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { NavbarData } from "../data/mockData";


const Navbar = () => {
    return (
        <nav className='py-5'>
            <div className='container flex mx-auto justify-between items-center'>
                {/* Logo Section */}
                <div className='flex items-center gap-2 text-3xl font-semibold'>
                    <FiCoffee />
                    Jennete Cafe</div>
                {/* Menu Section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4'>
                        {NavbarData.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className='inline-text-base py-2
                                 px-3 uppercase cursor-pointer'>{item.title}</a>

                            </li>
                        ))}
                        <button className='text-xl ps-14'>
                            <FaRegUser />
                        </button>
                    </ul>
                </div>
                {/* Hamburger menu */}
                <div className="md:hidden">
                    <MdMenu className="text-4xl" />
                </div>
            </div>
        </nav>)
}

export default Navbar
