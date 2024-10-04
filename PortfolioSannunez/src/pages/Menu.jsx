export default function Menu() {
    return ( 
    <>
        <body className="flex flex-col justify-center items-center max-w-[1024px] h-[90vh] mx-[auto]">
            <div className="flex flex-col items-center">
                <div className="flex h-[50px] items-center gap-[5px]">
                    <div className="flex flex-col w-[120w] gap-[3px] items-end pt-[23px]">
                        <div className="w-[80px] h-[6px] bg-[#070707]"></div>
                        <div className="w-[120px] h-[6px] bg-[#070707]"></div>
                    </div>
                    <h1 className="font-koulen text-[72px]">SANNUNEZ<span className="animate-textChangeColor">&lt;3</span></h1>
                    <div className="flex flex-col w-[100w] gap-[3px] pt-[23px]">
                        <div className="w-[80px] h-[6px] bg-[#070707]"></div>
                        <div className="w-[120px] h-[6px] bg-[#070707]"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[40px]">my friends call me <span className="text-[#4A2499]">San</span>, <span className="text-[#4A2499]">Nunez</span>, <span className="text-[#4A2499]">Gui</span>.</h2>
                    <p className="text-[22px]">feel free to use wichever you want</p>
                </div>
            </div>
            <div className= "grid grid-cols-[165px_165px_165px_165px] grid-rows-[165px_65px_165px] gap-[1px] max-w-[768px] p-[50px_0_0_0]">
                {/* ARTIST GRID */}
                <div className="col-start-1 row-start-1 row-span-3 flex items-center justify-center pt-[60px]">
                    <div className="flex justify-end pr-[5px] w-[98%] h-[78%] relative">
                      <img src="../../src/assets/images/menu-img-decoration1.png" alt="Menu Decoration" className="absolute bottom-0 left-0"/>
                      <div className="z-10 animate-float flex justify-center items-center w-[72%] h-[84%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                        <div className="flex justify-center w-[90px] h-[190px] rounded-[15px] bg-[url('../../src/assets/images/nunez-art-1.png')] bg-cover bg-[30%] brightness-75 hover:brightness-100 duration-[0.5s]">
                            <p className='text-[18px] text-center text-transparent w-[100%] h-[100%] hover:animate-textUpArt'>artist</p> 
                        </div>
                      </div>
                    </div>
                </div>
                {/* STUDENT GRID */}
                <div className="col-start-2 row-start-1 row-span-2 flex items-center justify-center">
                    <div className="z-10 animate-float flex justify-center items-center w-[82%] h-[100%] bg-[#1E1E1E] rounded-[15px] shadow-md">
                        <div className="flex justify-center w-[100px] h-[100px] rounded-[10px] bg-[url('../../src/assets/images/FIAP-logo.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='text-[18px] text-center absolute text-transparent w-[100px] h-[100px] hover:animate-textUpStudent'>student</p> 
                        </div>
                    </div>
                </div>
                {/* MY CAT GRID */}
                <div className="col-start-3 row-start-1 row-span-2 flex items-end justify-center pb-[15px]">
                    <div className="z-10 animate-float flex justify-center items-center w-[95%] h-[75%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                        <div className="flex justify-center w-[130px] h-[130px] rounded-[10px] bg-[url('../../src/assets/images/MYCAT.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='text-[18px] text-center absolute text-transparent w-[120px] h-[120px] hover:animate-textUpCat'>my son</p> 
                        </div>
                    </div>
                </div>
                {/* LEARNING GRID */}
                <div className="col-start-4 row-start-1 row-span-3 flex justify-center items-end pb-[40px]">
                    <div className="flex justify-start items-center w-[84%] h-[74%] relative pt-[20px]">
                        <img src="../../src/assets/images/menu-img-decoration2.png" alt="Menu Decoration" className="absolute top-0 right-0"/>
                        <div className="z-10 animate-float flex justify-center items-center w-[70%] h-[65%] bg-[#4A2499] rounded-[15px] shadow-md">
                            <div className="flex justify-center w-[80%] h-[140px] rounded-[0px] bg-[url('../../src/assets/images/learning-menu.png')] bg-cover bg-[30%] brightness-75 hover:brightness-100 duration-[0.5s]">
                                <p className='text-[18px] text-center text-transparent w-[100%] h-[100%] hover:animate-textUpLearning'>learning...</p> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* BILINGUAL GRID */}
                <div className="col-start-2 row-start-3 flex justify-center items-start pt-[15px]">
                    <div className="z-10 animate-float flex justify-center items-center w-[60%] h-[65%] bg-[#4A2499] rounded-[15px] shadow-md">
                        <div className="flex justify-center w-[65px] h-[65px] rounded-[10px] bg-[url('../../src/assets/images/bilingual.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='text-[18px] text-center absolute text-transparent w-[80px] h-[60px] hover:animate-textDownBilingual'>bilingual</p> 
                        </div>
                    </div>
                </div>
                {/* BRAZILIAN CARD */}
                <div className="col-start-3 row-start-3 flex justify-center c">
                    <div className="z-10 animate-float flex justify-center items-center w-[55%] h-[55%] bg-[#D9D9D9] rounded-[15px] shadow-md">
                        <div className="flex justify-center w-[70px] h-[70px] rounded-[10px] bg-[url('../../src/assets/images/brazil-flag.png')] bg-cover bg-[30%] brightness-50 hover:brightness-100 duration-[0.5s]">
                            <p className='text-[18px] text-center absolute text-transparent w-[80px] h-[60px] hover:animate-textDownBilingual'>brazilian</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='text-center max-w-[300px] w-[300px] text-[22px]'>come to know me better :)</p>
                <div className='flex items-center gap-2'>
                    <div className="flex flex-col w-[110w] items-end">
                        <div className="w-[115px] h-[4px] bg-[#4A2499]"></div>
                    </div>
                    <img src="../../src/assets/images/purple-heart.png" alt="PurpleHeart" className="w-[30px]"/>
                    <div className="flex flex-col w-[110w]">
                        <div className="w-[115px] h-[4px] bg-[#4A2499]"></div>
                    </div>
                </div>
            </div>
        </body>
    </> );
}