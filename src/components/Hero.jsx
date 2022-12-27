import React from "react";
import Typed from 'react-typed';
import { AiOutlineArrowRight } from "react-icons/ai";
import '../css/Home.css';

const Hero = () => {
    return (
        <div className="headerSection h-screen">
            <div className="max-w-[1024px] flex flex-col mx-auto justify-center text-center py-[120px] 2xl:py-[206px]">
                    <h1 className="text-3xl text-white">Hello!</h1>
                    <h1 className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-[#0d84bf] font-bold py-4">I'am Muhammad Haris Kumala.</h1>
                    <p className="text-gray-500 font-semibold py-4">As a person, I am constantly striving to improve myself and become a better person. I believe that growth and personal development are important aspects of a fulfilling life.</p>
                    <div className="flex justify-center">
                        <p className="text-white py-4 text-xl md:text-2xl">Just Guy Who likes</p>
                        <Typed
                            className="font-bold text-2xl text-[#00df9a] pl-2 md:pl-3 py-4"
                            strings={['Photography.', 'Videography.', 'Web Developer.']}
                            typeSpeed={120}
                            backSpeed={60}
                            loop/>
                    </div>
                    <button className="text-slate-700 bg-[#00df9a] w-[170px] rounded-2xl font-semibold mx-auto py-2 px-4 flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out">Get Started <AiOutlineArrowRight className="ml-1 hover animate-bounce" /></button>
            </div>
        </div>
    )
}

export default Hero;