import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function darkMode() {

       const[darkIsActive, setDarkIsActive] = useState(false)
      
       const toggleDark = () =>{
            setDarkIsActive(!darkIsActive)
    };

    return (
        <>
            <header className={`${darkIsActive
                ? "bg-white" 
                : "bg-[#070707]"} font-alternates flex justify-between items-center  w-[100%] fixed top-0 bg-[#070707] text-white transition duration-[1s] z-20`}>
                <div className="max-md:mx-0 max-md:justify-around max-sm:mx-0 max-sm:justify-around flex items-center justify-between w-[100%] mx-[30px]">
                    <div>
                        <img src={darkIsActive
                        ? "../../src/assets/images/SannunezLogo-provisorio-darkmode.png"
                        : "../../src/assets/images/SannunezLogo-provisorio.png"} alt="LOGO" className="max-sm:w-[38px] max-sm:h-[28px] w-[48px] h-[35px]"/>
                    </div>
                    <nav className="flex gap-[2vw] items-center">
                        <ul className="flex gap-[2vw]">
                            <li className="max-md:text-[12px] max-sm:text-[10px]"><NavLink to="/" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A] pointer-events-none": "text-[#4A2499] pointer-events-none" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>menu</NavLink></li>
                            <li className="max-md:text-[12px] max-sm:text-[10px]"><NavLink to="/MyProjects" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A] pointer-events-none" : "text-[#4A2499] pointer-events-none" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>my projects</NavLink></li>
                            <li className="max-md:text-[12px] max-sm:text-[10px]"><NavLink to="/AboutMe" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A] pointer-events-none" : "text-[#4A2499] pointer-events-none" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>about me</NavLink></li>
                            <li className="max-md:text-[12px] max-sm:text-[10px]"><NavLink to="/Contact" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A] pointer-events-none" : "text-[#4A2499] pointer-events-none" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>contact</NavLink></li>
                        </ul>
                        <span className={`${darkIsActive 
                        ? "text-black"
                        : "text-white"} flex items-end text-[35px] h-[50px] font-thin`}>|</span>
                        <button
                            onClick={toggleDark}
                            className={`${darkIsActive 
                                ? "flex items-center bg-[#38DE2A]" 
                                : "flex items-center bg-[#4A2499]"} max-md:w-[45px] max-md:h-[20px] max-sm:w-[35px] max-sm:h-[15px]  h-[25px] w-[55px] border-none rounded-[15px] transition duration-[1s]`}
                            >
                            <div className={`${darkIsActive 
                                ? "flex translate-x-7  max-md:translate-x-5 max-sm:translate-x-4" 
                                : "flex" } max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px] bg-white w-[18px] h-[18px] mx-[5px] rounded-[90px] transition duration-[1s]`}></div>
                        </button>
                    </nav>
                </div>
            </header>  
        </>
     );
}
