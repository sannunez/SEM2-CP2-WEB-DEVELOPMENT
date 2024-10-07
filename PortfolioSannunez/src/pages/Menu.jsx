import darkMode from "../components/Header";
import { useState } from "react";


export default function Menu() {
    const[darkIsActive, setDarkIsActive] = useState(false)
      
    const toggleDark = () =>{setDarkIsActive(!darkIsActive)};
    return ( 
        <>
            <main className={`${darkIsActive ? 'bg-black' : 'bg-white'} flex flex-col justify-center items-center mx-[auto] py-[120px] my-[2%] font-alternates`}>
                <div className="flex flex-col items-center">
                    <div className="flex h-[50px] items-center gap-[5px]">
                        <div className="max-lg:w-[100px] max-md:w-[80px] max-sm:w-[60px] flex flex-col w-[120w] gap-[3px] items-end pt-[23px]">
                            <div className="max-lg:w-[65px] max-lg:h-[5px] max-md:w-[55px] max-md:h-[5px] max-sm:w-[35px] max-sm:h-[4px] w-[80px] h-[6px] bg-[#070707]"></div>
                            <div className="max-lg:w-[100px] max-lg:h-[5px] max-md:w-[80px] max-md:h-[5px] max-sm:w-[60px] max-sm:h-[4px] max-sm:mb-[10px] w-[120px] h-[6px] bg-[#070707]"></div>
                        </div>
                        <h1 className="max-lg:text-[62px] max-md:text-[54px] max-sm:text-[38px] font-koulen text-[72px]">SANNUNEZ<span className="animate-textChangeColor">&lt;3</span></h1>
                        <div className="max-lg:w-[100px] max-md:w-[80px] max-sm:w-[60px] flex flex-col w-[100] gap-[3px] pt-[23px]">
                            <div className="max-lg:w-[65px] max-lg:h-[5px] max-md:w-[55px] max-md:h-[5px] max-sm:w-[35px] max-sm:h-[4px] w-[80px] h-[6px] bg-[#070707]"></div>
                            <div className="max-lg:w-[100px] max-lg:h-[5px] max-md:w-[80px] max-md:h-[5px] max-sm:w-[60px] max-sm:h-[4px] max-sm:mb-[10px] w-[120px] h-[6px] bg-[#070707]"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="max-lg:text-[32px] max-md:text-[22px] max-sm:text-[16px] text-[40px]">my friends call me <span className="text-[#4A2499]">San</span>, <span className="text-[#4A2499]">Nunez</span>, <span className="text-[#4A2499]">Gui</span>.</h2>
                        <p className="max-lg:text-[18px] max-md:text-[16px] max-sm:text-[12px] text-[22px]">feel free to use wichever you want</p>
                    </div>
                </div>
                <div className="max-lg:pt-[30px] max-lg:grid-cols-[145px_145px_145px_145px] max-lg:grid-rows-[145px_110px_145px] max-md:w-[425px] max-md:grid-cols-[105px_105px_105px_105px] max-md:grid-rows-[130px_90px_130px] max-md:pt-[0px] max-sm:w-[320px] max-sm:grid-cols-[80px_80px_80px_80px] max-sm:grid-rows-[90px_50px_90px] grid grid-cols-[165px_165px_165px_165px] grid-rows-[165px_65px_165px] gap-[1px] max-w-[768px] p-[50px_0_0_0]">
                    {/* ARTIST GRID */}
                    <div className="max-lg:pt-[30px] max-md:pt-[20px] max-sm:pt-[5px] col-start-1 row-start-1 row-span-3 flex items-center justify-center pt-[60px]">
                        <div className="max-lg:w-[145px] max-lg:h-[60%] max-md:h-[50%] max-md:w-[105px] max-sm:h-[48%] flex justify-end pr-[5px] w-[98%] h-[78%] relative">
                            <div><img src="../src/assets/images/menu-img-decoration1.png" alt="Menu Decoration" className="absolute bottom-0 left-0"/></div>
                            <div className="max-md:rounded-[10px] max-sm:rounded-[5px] z-10 animate-float flex justify-center items-center w-[72%] h-[84%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                                <div className="max-lg:w-[85px] max-lg:h-[165px] max-md:w-[55px] max-md:h-[120px] max-md:rounded-[10px] max-sm:w-[40px] max-sm:h-[80px] max-sm:rounded-[5px] flex justify-center w-[90px] h-[190px] rounded-[15px] bg-[url('../src/assets/images/nunez-art-1.png')] bg-cover bg-center brightness-75 hover:brightness-100 duration-[0.5s]">
                                    <p className='max-lg:text-[16px] max-md:text-[12px] max-md:hover:animate-textUpArtTablet max-sm:text-[10px] max-sm:hover:animate-textUpArtMobile text-[18px] text-center text-transparent w-[100%] h-[100%] hover:animate-textUpArt'>artist</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* STUDENT GRID */}
                    <div className="max-lg:pt-[25px] max-md:pt-[35px] pb-2 col-start-2 row-start-1 row-span-2 flex items-center justify-center">
                        <div className="max-lg:w-[120px] max-lg:h-[210px] max-md:rounded-[15px] max-md:w-[95px] max-md:h-[165px] max-sm:rounded-[10px] max-sm:w-[70px] max-sm:h-[120px] z-10 animate-float flex justify-center items-center w-[82%] h-[100%] bg-[#1E1E1E] rounded-[15px] shadow-md">
                            <div className="max-lg:w-[90px] max-lg:h-[90px] max-md:w-[70px] max-md:h-[70px] max-sm:w-[55px] max-sm:h-[55px] flex justify-center w-[100px] h-[100px] rounded-[10px] bg-[url('../src/assets/images/FIAP-logo.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                                <p className='max-lg:text-[16px] max-md:text-[12px] max-md:hover:animate-textUpStudentTablet max-sm:text-[10px] max-sm:hover:animate-textUpStudentMobile text-[18px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textUpStudent'>student</p> 
                            </div>
                        </div>
                    </div>
                    {/* MY CAT GRID */}
                    <div className="col-start-3 row-start-1 row-span-2 flex items-end justify-center pb-[15px]">
                        <div className="max-lg:w-[130px] max-lg:h-[130px] max-md:rounded-[15px] max-md:w-[110px] max-md:h-[110px] max-sm:rounded-[10px] max-sm:w-[80px] max-sm:h-[80px] z-10 animate-float flex justify-center items-center w-[95%] h-[75%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                            <div className="max-lg:w-[105px] max-lg:h-[105px] max-md:w-[80px] max-md:h-[80px] max-sm:w-[60px] max-sm:h-[60px] flex justify-center w-[130px] h-[130px] rounded-[10px] bg-[url('../src/assets/images/mycat.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                                <p className='max-lg:text-[16px] max-md:text-[12px] max-md:hover:animate-textUpCatTablet max-sm:text-[10px] max-sm:hover:animate-textUpCatMobile text-[18px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textUpCat'>my son</p> 
                            </div>
                        </div>
                    </div>
                    {/* LEARNING GRID */}
                    <div className="max-md:pt-[10px] col-start-4 row-start-1 row-span-3 flex justify-center items-end pb-[40px]">
                        <div className="max-md:pt-[10px] flex justify-start items-center w-[84%] h-[74%] relative pt-[20px]">
                            <img src="../src/assets/images/menu-img-decoration2.png" alt="Menu Decoration" className="absolute right-0 max-sm:bottom-[55px] max-md:bottom-[100px] max-lg:bottom-[110px] bottom-[100px]"/>
                            <div className="max-lg:h-[145px] max-md:h-[115px] max-md:rounded-[10px] max-sm:rounded-[10px] z-10 animate-float flex justify-center items-center w-[70%] h-[65%] bg-[#4A2499] rounded-[15px] shadow-md">
                                <div className="max-lg:h-[115px] max-lg:w-[65px] max-md:h-[105px] max-md:w-[55px] max-sm:h-[75px] max-sm:w-[40px] flex justify-center w-[80%] h-[140px] rounded-[0px] bg-[url('../src/assets/images/learning-menu.png')] bg-cover bg-[30%] brightness-75 hover:brightness-100 duration-[0.5s]">
                                    <p className='max-lg:text-[16px] max-md:text-[12px] max-md:hover:animate-textUpLearningTablet max-sm:text-[8px] max-sm:hover:animate-textUpLearningMobile text-[18px] text-center text-transparent w-[100%] h-[100%] hover:animate-textUpLearning'>learning...</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BILINGUAL GRID */}
                    <div className="max-lg:pt-0 max-md:pt-0 max-sm:pt-0  col-start-2 row-start-3 flex justify-center items-start pt-[15px]">
                        <div className="max-lg:h-[75px] max-lg:w-[75px] max-md:rounded-[15px] max-md:h-[65px] max-md:w-[65px] max-sm:rounded-[10px] max-sm:h-[50px] max-sm:w-[50px] z-10 animate-float flex justify-center items-center w-[60%] h-[65%] bg-[#4A2499] rounded-[15px] shadow-md">
                            <div className="max-lg:w-[55px] max-lg:h-[55px] max-md:w-[45px] max-md:h-[45px] max-sm:w-[35px] max-sm:h-[35px] flex justify-center w-[65px] h-[65px] bg-[url('../src/assets/images/bilingual.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                                <p className='max-lg:text-[12px] max-lg:hover:animate-textDownBilingualLarge max-md:text-[10px] max-md:hover:animate-textDownBilingualTablet max-sm:text-[8px] max-sm:hover:animate-textDownBilingualMobile text-[14px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textDownBilingual'>bilingual</p> 
                            </div>
                        </div>
                    </div>
                    {/* BRAZILIAN CARD */}
                    <div className="col-start-3 row-start-3 flex justify-center">
                        <div className="max-lg:w-[70px] max-lg:h-[70px] max-md:w-[60px] max-md:h-[60px] max-md:rounded-[10px] max-sm:w-[45px] max-sm:h-[45px] max-sm:rounded-[10px] z-10 animate-float flex justify-center items-center w-[55%] h-[55%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                            <div className="max-lg:w-[60px] max-lg:h-[60px] max-md:w-[45px] max-md:h-[45px] max-sm:w-[35px] max-sm:h-[35px] max-sm:rounded-[5px] flex justify-center w-[70px] h-[70px] rounded-[10px] bg-[url('../src/assets/images/brazil-flag.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                                <p className='max-lg:text-[12px] max-lg:hover:animate-textDownBilingualLarge max-md:text-[10px] max-md:hover:animate-textDownBilingualTablet max-sm:text-[8px] max-sm:hover:animate-textDownBilingualMobile text-[14px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textDownBilingual'>brazilian</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className='max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] text-center max-w-[300px] w-[300px] text-[22px]'>come to know me better :)</p>
                    <div className='flex items-center gap-2'>
                        <div className="max-lg:w-[100px] max-md:w-[80px] max-sm:w-[60px] flex flex-col w-[110px] items-end">
                            <div className="max-lg:w-[100px] max-md:w-[80px] max-sm:w-[60px] max-sm:h-[3px] w-[115px] h-[4px] bg-[#4A2499]"></div>
                        </div>
                        <div className='max-lg:w-[25px] max-md:w-[25px] max-sm:w-[25px] w-[20px] h-[20px] bg-[url("../src/assets/images/purple-heart.svg")] bg-cover bg-no-repeat bg-center'></div>
                        <div className="max-lg:w-[100px] max-md:w-[80px]  max-sm:w-[60px] flex flex-col w-[110px]">
                            <div className="max-lg:w-[100px] max-md:w-[80px]  max-sm:w-[60px] max-sm:h-[3px] w-[115px] h-[4px] bg-[#4A2499]"></div>
                        </div>
                    </div>
                </div>
            </main>
        </> );
}