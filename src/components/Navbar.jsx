import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub } from 'react-icons/ai';
// import '../App.css';
import '../css/Navbar.css';

function Navbar(){
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <div className="header backdrop-blur-lg bg-black/70 border-b-[0.1px] border-slate-700">
            <div className="max-w-[1324px] px-6 xl:px-0 mx-auto flex justify-between py-5">
                <div className="nav-brand flex">
                    <span className="text-2xl text-[#00df9a] font-bold tracking-widest">welcome</span>
                </div>
                <ul className="link items-center text-white font-medium text-sm hidden md:flex">
                    <li><Link to="/" className="hover:text-emerald-500 px-5">Home</Link></li>
                    <li><Link to="/about" className="hover:text-emerald-500 px-5">About</Link></li>
                    <li><Link to="contact" className="hover:text-emerald-500 px-5">Contact</Link></li>
                    <li><Link to="/portofolio" className="hover:text-emerald-500 px-5">Portofolio</Link></li>
                    <li className="border-l pl-5 border-whtie"><a href="https://github.com/Blizzy11" target="_blank" className="hover:text-emerald-500"><AiOutlineGithub size={25}/></a></li>
                </ul>
                <div  className="flex items-center md:hidden text-white" onClick={handleNav}>
                    {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
                </div>
                <div className={!nav ? 'fixed top-0 left-[-100%] h-screen ease-in-out duration-700' : 'fixed left-0 top-0 w-[60%] h-screen bg-slate-900 ease-in-out duration-700 flex md:hidden'}>
                    <ul className="link text-3xl flex flex-col p-10 font-semibold">
                        <li className="py-3"><Link to="/" className="hover:text-emerald-500">Home</Link></li>
                        <li className="py-3"><Link to="/about" className="hover:text-emerald-500">About</Link></li>
                        <li className="py-3"><Link to="/contact" className="hover:text-emerald-500">Contact</Link></li>
                        <li className="py-3"><Link to="/portofolio" className="hover:text-emerald-500">Portofolio</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
