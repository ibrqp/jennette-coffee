import React, { useEffect } from 'react';
import { motion, easeInOut, AnimatePresence } from "framer-motion";
import { CoffeeData } from '../data/mockData';
import { SlideRight } from '../utility/animation';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from './Navbar';

const Hero = () => {
    const [activeData, setActiveData] = React.useState((CoffeeData[0]));
    const [currentIndex, setCurrentIndex] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CoffeeData.length);
        }, 4000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        setActiveData(CoffeeData[currentIndex]);
    }, [currentIndex]);
    return (
        <motion.section
            initial={{
                backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 0%)`,
            }}
            animate={{
                backgroundImage: `radial-gradient(circle, ${activeData.bgColor}aa 0%, ${activeData.bgColor}70%)`,
            }}
            transition={{
                duration: 1,
                ease: easeInOut,
            }}
            className="text-white"
        >   
        <Navbar/>
            <div className='container grid grid-cols-1 mx-auto md:grid-cols-2 h-screen md:h-[700px] relative'>
                {/* LEFT SIDE */}
                <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1'>
                    <div className='space-y-5 md:space-y-7 text-center md:text-left'>

                        {/* title */}
                        <AnimatePresence mode='wait'>
                            <motion.h1
                                key={activeData.id}
                                variants={SlideRight(0.2)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-3xl lg:text-4xl xl:text-5xl font-bold'
                            >
                                {activeData.title}
                            </motion.h1>
                        </AnimatePresence>

                        {/* sub title */}
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={activeData.id + "-sub"}
                                variants={SlideRight(0.4)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-sm leading-loose text-white/80'
                            >
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>

                        {/* price */}
                        <motion.p
                            key={activeData.id + "-price"}
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className='text-3xl lg:text-4xl xl:text-5xl font-bold'
                        >
                            {activeData.price}
                        </motion.p>

                        {/* sosial media */}
                        <div className='flex items-center justify-center md:justify-start gap-4 text-3xl'>
                            <FaInstagram className="cursor-pointer border rounded-full p-[6px]" />
                            <FaFacebook className="cursor-pointer border rounded-full p-[6px]" />
                            <FaTwitter className="cursor-pointer border rounded-full p-[6px]" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='flex flex-col items-center justify-center order-1 md:order-2 relative'>
                    <AnimatePresence mode='wait'>

                        {/* IMAGE */}
                        <motion.img
                            key={activeData.id + "-img"}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.4, ease: easeInOut, delay: 0.4 }}
                            src={activeData.image}
                            alt=""
                            className='w-[400px] md:w-[400px] xl:w-[500px] relative z-10'
                        />

                        {/* TEXT MODAL */}
                        <motion.div
                            key={activeData.id + "-modal"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: easeInOut, delay: 0.2 }}
                            className='text-[300px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-white/5 font-poppins font-extrabold'
                        >
                            {activeData.modal}
                        </motion.div>

                    </AnimatePresence>
                </div>

            </div>
        </motion.section>
    );
}

export default Hero;
