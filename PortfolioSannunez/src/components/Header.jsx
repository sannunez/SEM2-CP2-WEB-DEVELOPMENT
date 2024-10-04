import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

       const[darkIsActive, setDarkIsActive] = useState(false)
      
       const toggleDark = () =>{
            setDarkIsActive(!darkIsActive)
    };

    return (
        <>
            <header className={`${darkIsActive
                ? "bg-white" 
                : "bg-[#070707]"} flex justify-between items-center  w-[100%] h-[5vh] bg-[#070707] text-white transition duration-[1s]`}>
                <div className="flex items-center justify-between w-[100%] mx-[30px]">
                    <div>
                        <img src={darkIsActive
                        ? "../../src/assets/images/SannunezLogo-provisorio-darkmode.png"
                        : "../../src/assets/images/SannunezLogo-provisorio.png"} alt="LOGO" className="w-[48px] h-[35px]"/>
                    </div>
                    <nav className="flex gap-[2vw] items-center">
                        <ul className="flex gap-[2vw]">
                            <li className="hover:text-[#4A2499]"><NavLink to="/" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A]" : "text-[#4A2499]" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>menu</NavLink>
                            </li>
                            <li className="hover:text-[#4A2499]"><NavLink to="/MyProjects" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A]" : "text-[#4A2499]" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>my projects</NavLink></li>
                            <li className="hover:text-[#4A2499]"><NavLink to="/AboutMe" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A]" : "text-[#4A2499]" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>about me</NavLink></li>
                            <li className="hover:text-[#4A2499]"><NavLink to="/Contact" className={({ isActive }) => isActive ? darkIsActive ? "text-[#38DE2A]" : "text-[#4A2499]" : darkIsActive ? "text-black hover:text-[#38DE2A]" : "text-white hover:text-[#4A2499]"}>contact</NavLink></li>
                        </ul>
                        <span className="flex items-end text-[35px] h-[50px] font-thin">|</span>
                        <button
                            onClick={toggleDark}
                            className={`${darkIsActive 
                                ? "flex items-center bg-[#38DE2A]" 
                                : "flex items-center bg-[#4A2499]"} h-[25px] w-[55px] border-none rounded-[15px] transition duration-[1s]`}
                            >
                            <div className={`${darkIsActive 
                                ? "flex translate-x-7" 
                                : "flex" } bg-white w-[18px] h-[18px] mx-[5px] rounded-[90px] transition duration-[1s]`}></div>
                        </button>
                    </nav>
                </div>
            </header>  
        </>
     );
}
