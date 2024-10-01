import { NavLink } from "react-router-dom";

export default function Header() {
    return ( 
        <>
            <header className="flex justify-between items-center  w-[100%] h-[50px] bg-[#070707] text-white">
                <div className="flex items-center justify-between w-[100%] mx-[30px]">
                    <div>
                        <h1>LOGO</h1>
                    </div>
                    <nav className="flex gap-[2vw] items-center">
                        <ul className="flex gap-[2vw]">
                            <li className="hover:text-[#4A2499]"><NavLink to="/" className={({isActive}) =>  isActive ? "text-[#4A2499]" : "text-white hover:text-[#4A2499]" }>menu</NavLink></li>
                            <li className="hover:text-[#4A2499]"><NavLink to="/MyProjects" className={({isActive}) =>  isActive ? "text-[#4A2499]" : "text-white hover:text-[#4A2499]"}>my projects</NavLink></li>
                            <li className="hover:text-[#4A2499]"><NavLink to="/AboutMe" className={({isActive}) =>  isActive ? "text-[#4A2499]" : "text-white hover:text-[#4A2499]"}>about me</NavLink></li>
                            <li className="hover:text-[#4A2499]"><NavLink to="/Contact" className={({isActive}) =>  isActive ? "text-[#4A2499]" : "text-white hover:text-[#4A2499]"}>contact</NavLink></li>
                        </ul>
                        <span className="flex items-end text-[35px] h-[50px] font-thin">|</span>
                        <button className="flex items-center bg-[#4A2499] h-[25px] w-[55px] border-none rounded-[15px]">
                            <div className="bg-white w-[18px] h-[18px] ml-[5px] rounded-[90px]"></div>
                        </button>    
                    </nav>            
                </div>
            </header>  
        </>
     );
}
