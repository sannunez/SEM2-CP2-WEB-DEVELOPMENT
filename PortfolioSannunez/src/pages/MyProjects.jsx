import React, {useEffect} from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import projects from '../data/projects.json'
import { useParams } from 'react-router-dom';
import airbnbImage from '../assets/images/airbnbclone.png'
import femmersive from '../assets/images/F-EMMERSIVE.png'

const imageMap = {
    "airbnb-clone": airbnbImage,
    "formula-emmersive": femmersive
}


function MyProjects() {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === id);

    const navigate = useNavigate();

    useEffect(() => {
        if (projects.length > 0) {
          navigate(`/MyProjects/${projects[0].id}`);
        }
      }, [navigate]);

    return (
        <>
            <div className="max-lg:w-[768px] max-md:w-[425px] max-md:py-[80px] max-md:flex-col max-sm:w-[320px] max-sm:py-[80px] max-sm:flex-col max-w-[1024px] gap-10 mx-[auto] flex justify-center items-center overflow-auto py-[110px] my-[2%]">
                <div className='max-md:w-[100%] max-md:items-center max-sm:w-[100%] w-[30%] h-[500px] relative flex flex-col gap-[30px]'>
                    <div className='max-md:ml-0  max-sm:ml-[20px] flex ml-[35px] justify-center w-[280px] h-[100%] p-[10px] bg-[url("../../src/assets/images/myproj-deco.svg")] bg-cover bg-no-repeat bg-center'>
                        <div className='w-[85%] h-[90%] flex justify-center mt-[25px] rounded-[15px] bg-[#d9d9d9]'>
                            <nav>
                                <ul>
                                    {projects.map(projeto => (
                                        <li key={projeto.id}>
                                            <Link to={`${projeto.id}`}>
                                            <button className='flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#4A2499] rounded-[10px] hover:bg-[#7038e9] hover:transition hover:duration-[0.5s]'><img src={imageMap[projeto.id]} alt={projeto.titulo} className='w-[200px]'/></button>
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <hr className='h-2 w-[100%] p-[5px] bg-black'/>
                                        <button className='w-[100%] h-[40px] flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#222121] rounded-[10px] font-bold items-center animate-textUpcoming'>UPCOMING</button>
                                        <button className='w-[100%] h-[40px] flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#222121] rounded-[10px] font-bold items-center animate-textUpcoming'>UPCOMING</button>
                                        <button className='w-[100%] h-[40px] flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#222121] rounded-[10px] font-bold items-center animate-textUpcoming'>UPCOMING</button>
                                        <button className='w-[100%] h-[40px] flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#222121] rounded-[10px] font-bold items-center animate-textUpcoming'>UPCOMING</button>
                                        <button className='w-[100%] h-[40px] flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#222121] rounded-[10px] font-bold items-center animate-textUpcoming'>UPCOMING</button>
                                        <button className='w-[100%] h-[40px] flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#222121] rounded-[10px] font-bold items-center animate-textUpcoming'>UPCOMING</button>
                                        <button className='w-[100%] h-[40px] flex justify-center m-[5px_0_5px_0] p-[5px] bg-[#222121] rounded-[10px] font-bold items-center animate-textUpcoming'>UPCOMING</button>
                      
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr className='max-lg:mx-[60px] max-md:hidden max-sm:hidden h-[550px] w-[6px] bg-[#070707]'/>
                <div className="max-md:w-[425px] max-sm:w-[320px] w-[65%]">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default MyProjects;