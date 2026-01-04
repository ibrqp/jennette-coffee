import React from 'react'
import { FiCoffee } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { NavbarData } from "../data/mockData";

const Navbar = () => {
    return (
        <nav className="py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

                {/* Logo */}
                <div className="flex items-center gap-2 text-2xl font-semibold select-none">
                    <FiCoffee className="text-3xl" />
                    <span>Jennete Cafe</span>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-2">
                        {NavbarData.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.link}
                                    className="
                                        text-base
                                        px-3
                                        py-2
                                        uppercase
                                        tracking-wide
                                        hover:text-white/80
                                        transition
                                    "
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* User Icon */}
                    <button className="text-xl hover:scale-105 transition">
                        <FaRegUser />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <MdMenu className="text-4xl cursor-pointer" />
                </div>

            </div>
        </nav>
    )
}

export default Navbar
