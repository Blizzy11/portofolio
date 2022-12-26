import React from "react";
import Tailwind from '../assets/tailwind-css.png';
import Bootstrap from '../assets/bootstrap.png';
import Css from '../assets/css3.png';
import Html from '../assets/html.png';
import Javascript from '../assets/java-script.png';
import Laravel from '../assets/laravel.png';
import Codeigniter from '../assets/codeigniter.png';
import ReactLogo from '../assets/react.png';

const Ability = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1024px] mx-auto">
                <h1 className="text-black text-center font-bold text-2xl md:text-4xl uppercase border-b-2 border-[#00df9a] pb-4">Ability in programing</h1>
                <div className="flex flex-wrap justify-center items-center pt-4">
                    <img src={Tailwind} alt="" className="w-[120px]"/>
                    <img src={Bootstrap} alt="" className="w-[80px] h-[80px]"/>
                    <img src={Css} alt="" className="w-[120px]"/>
                    <img src={Html} alt="" className="w-[120px]"/>
                    <img src={Javascript} alt="" className="w-[120px]"/>
                    <img src={Laravel} alt="" className="w-[120px]"/>
                    <img src={Codeigniter} alt="" className="w-[120px]"/>
                    <img src={ReactLogo} alt="" className="w-[120px]"/>
                </div>
            </div>
        </div>
    )
}

export default Ability;