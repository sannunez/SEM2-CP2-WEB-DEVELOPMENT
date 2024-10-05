export default function Menu() {
    return ( 
    <>
        <body className="flex flex-col justify-center items-center max-w-[1024px] h-[100vh] mx-[auto]">
            <div className="flex flex-col items-center">
                <div className="flex h-[50px] items-center gap-[5px]">
                    <div className="max-sm:w-[60px] flex flex-col w-[120] gap-[3px] items-end pt-[23px]">
                        <div className="max-sm:w-[35px] max-sm:h-[4px] w-[80px] h-[6px] bg-[#070707]"></div>
                        <div className="max-sm:w-[60px] max-sm:h-[4px] max-sm:mb-[10px] w-[120px] h-[6px] bg-[#070707]"></div>
                    </div>
                    <h1 className="max-sm:text-[38px] font-koulen text-[72px]">SANNUNEZ<span className="animate-textChangeColor">&lt;3</span></h1>
                    <div className="flex flex-col w-[100] gap-[3px] pt-[23px]">
                        <div className="max-sm:w-[35px] max-sm:h-[4px] w-[80px] h-[6px] bg-[#070707]"></div>
                        <div className="max-sm:w-[60px] max-sm:h-[4px] max-sm:mb-[10px] w-[120px] h-[6px] bg-[#070707]"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="max-sm:text-[16px] text-[40px]">my friends call me <span className="text-[#4A2499]">San</span>, <span className="text-[#4A2499]">Nunez</span>, <span className="text-[#4A2499]">Gui</span>.</h2>
                    <p className="max-sm:text-[12px] text-[22px]">feel free to use wichever you want</p>
                </div>
            </div>
            <div className="max-sm:w-[320px] max-sm:grid-cols-[80px_80px_80px_80px] max-sm:grid-rows-[90px_90px_90px] max-sm:pt-[15px] grid grid-cols-[165px_165px_165px_165px] grid-rows-[165px_65px_165px] gap-[1px] max-w-[768px] p-[50px_0_0_0]">
                {/* ARTIST GRID */}
                <div className="max-sm:pt-[20px] col-start-1 row-start-1 row-span-3 flex items-center justify-center pt-[60px]">
                    <div className="max-sm:h-[54%] flex justify-end pr-[5px] w-[98%] h-[78%] relative">
                      <img src="../../src/assets/images/menu-img-decoration1.svg" alt="Menu Decoration" className="absolute bottom-0 left-0"/>
                      <div className="max-sm:rounded-[5px] z-10 animate-float flex justify-center items-center w-[72%] h-[84%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                        <div className="max-sm:w-[40px] max-sm:h-[100px] max-sm:rounded-[5px] flex justify-center w-[90px] h-[190px] rounded-[15px] bg-[url('../../src/assets/images/nunez-art-1.png')] bg-cover bg-[30%] brightness-75 hover:brightness-100 duration-[0.5s]">
                            <p className='max-sm:text-[10px] max-sm:hover:animate-textUpArtMobile text-[18px] text-center text-transparent w-[100%] h-[100%] hover:animate-textUpArt'>artist</p> 
                        </div>
                      </div>
                    </div>
                </div>
                {/* STUDENT GRID */}
                <div className="max-sm:items-end pb-2 col-start-2 row-start-1 row-span-2 flex items-center justify-center">
                    <div className="max-sm:rounded-[10px] max-sm:w-[70px] max-sm:h-[140px] z-10 animate-float flex justify-center items-center w-[82%] h-[100%] bg-[#1E1E1E] rounded-[15px] shadow-md">
                        <div className="max-sm:w-[55px] max-sm:h-[55px] flex justify-center w-[100px] h-[100px] rounded-[10px] bg-[url('../../src/assets/images/FIAP-logo.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='max-sm:text-[10px] max-sm:hover:animate-textUpStudentMobile text-[18px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textUpStudent'>student</p> 
                        </div>
                    </div>
                </div>
                {/* MY CAT GRID */}
                <div className="col-start-3 row-start-1 row-span-2 flex items-end justify-center pb-[15px]">
                    <div className="max-sm:rounded-[10px] max-sm:w-[80px] max-sm:h-[80px] z-10 animate-float flex justify-center items-center w-[95%] h-[75%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                        <div className="max-sm:w-[60px] max-sm:h-[60px] flex justify-center w-[130px] h-[130px] rounded-[10px] bg-[url('../../src/assets/images/MYCAT.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='max-sm:text-[10px] max-sm:hover:animate-textUpCatMobile text-[18px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textUpCat'>my son</p> 
                        </div>
                    </div>
                </div>
                {/* LEARNING GRID */}
                <div className="col-start-4 row-start-1 row-span-3 flex justify-center items-end pb-[40px]">
                    <div className="flex justify-start items-center w-[84%] h-[74%] relative pt-[20px]">
                        <img src="../../src/assets/images/menu-img-decoration2.svg" alt="Menu Decoration" className="absolute top-3 right-0"/>
                        <div className="max-sm:rounded-[10px] z-10 animate-float flex justify-center items-center w-[70%] h-[65%] bg-[#4A2499] rounded-[15px] shadow-md">
                            <div className="max-sm:h-[75px] max-sm:w-[40px] flex justify-center w-[80%] h-[140px] rounded-[0px] bg-[url('../../src/assets/images/learning-menu.png')] bg-cover bg-[30%] brightness-75 hover:brightness-100 duration-[0.5s]">
                                <p className='max-sm:text-[10px] max-sm:hover:animate-textUpLearningMobile text-[18px] text-center text-transparent w-[100%] h-[100%] hover:animate-textUpLearning'>learning...</p> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* BILINGUAL GRID */}
                <div className="max-sm:pt-0 col-start-2 row-start-3 flex justify-center items-start pt-[15px]">
                    <div className="max-sm:rounded-[10px] max-sm:h-[50px] max-sm:w-[50px] z-10 animate-float flex justify-center items-center w-[60%] h-[65%] bg-[#4A2499] rounded-[15px] shadow-md">
                        <div className="max-sm:w-[35px] max-sm:h-[35px] flex justify-center w-[65px] h-[65px] bg-[url('../../src/assets/images/bilingual.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='max-sm: max-sm:text-[8px] max-sm:hover:animate-textDownBilingualMobile text-[18px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textDownBilingual'>bilingual</p> 
                        </div>
                    </div>
                </div>
                {/* BRAZILIAN CARD */}
                <div className="col-start-3 row-start-3 flex justify-center">
                    <div className="max-sm:w-[45px] max-sm:h-[45px] max-sm:rounded-[10px] z-10 animate-float flex justify-center items-center w-[55%] h-[55%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                        <div className="max-sm:w-[45px] max-sm:h-[45px] max-sm:rounded-[5px] flex justify-center w-[70px] h-[70px] rounded-[10px] bg-[url('../../src/assets/images/brazil-flag.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='max-sm:text-[10px] max-sm:hover:animate-textDownBilingualMobile text-[18px] text-center absolute text-transparent w-[100%] h-[100%] hover:animate-textDownBilingual'>brazilian</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='max-sm:text-[16px] text-center max-w-[300px] w-[300px] text-[22px]'>come to know me better :)</p>
                <div className='flex items-center gap-2'>
                    <div className="max-sm:w-[60px] flex flex-col w-[110px] items-end">
                        <div className="max-sm:w-[60px] max-sm:h-[3px] w-[115px] h-[4px] bg-[#4A2499]"></div>
                    </div>
                    <img src="../../src/assets/images/purple-heart.svg" alt="PurpleHeart" className="max-sm:w-[20px] w-[30px]"/>
                    <div className="max-sm:w-[60px] flex flex-col w-[110px]">
                        <div className="max-sm:w-[60px] max-sm:h-[3px] w-[115px] h-[4px] bg-[#4A2499]"></div>
                    </div>
                </div>
            </div>
        </body>
    </> );
}