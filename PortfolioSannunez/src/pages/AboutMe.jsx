import { SiCss3, SiHtml5, SiJavascript, SiPython, SiReact } from "react-icons/si";

export default function AboutMe() {
    return ( 
        <>
        <main className="max-lg:w-[768px] max-md:flex-col max-md:py-[80px] max-sm:flex-col max-sm:py-[80px] flex justify-between items-center max-w-[1024px] py-[120px] overflow-auto mx-[auto] my-[2%]">
            {/* LEFT BLOCK */}
            <div className="max-md:w-[425px] max-md:h-[500px] max-sm:w-[320px] max-sm:h-[450px] flex flex-col w-[50%] h-[550px]">
                <div className="max-sm:gap-1 flex justify-between items-center w-[100%] h-[50%] gap-5">
                    <div className="h-[50%] flex items-center justify-center">
                        <div className="max-lg:h-[235px] max-lg:w-[195px] max-sm:h-[218px] max-sm:w-[180px] flex items-end justify-center h-[278px] w-[228px] bg-[url('../src/assets/images/myphoto-deco.svg')] bg-cover bg-no-repeat bg-center">
                            <div className="flex justify-center items-center max-lg:h-[175px] max-lg:w-[130px] max-sm:h-[165px] max-sm:w-[130px] max-sm:m-5 h-[210px] w-[165px] mb-7 bg-[#4A2499] rounded-[15px]">
                                <img src="../src/assets/images/selfie.jpg" alt="selfie" className="rounded-[360px] border-solid border-[5px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[70%]">
                        <p className="max-lg:text-[14px] max-sm:text-[12px] font-bold text-[16px]">Objetcives n' Goals:</p>
                                <ol className="max-lg:text-[12px] max-sm:text-[10px] text-[12px] list-disc ml-[20px]">
                                    <li>looking for job and internship opportunities</li>
                                    <li>acquire experience</li>
                                    <li>contribute positively to IT Area</li>
                                </ol>
                        <p className="max-lg:text-[12px] max-sm:text-[10px] text-[12px] mt-2">"I aspire to someday be a fullstack developer, because both areas (front and back-end) had fascinated me, and I couldn’t choose only one"</p>
                    </div>
                </div>
                <div className="max-lg:mt-5 max-sm:mt-0 flex flex-col justify-start gap-[10px] mt-[50px] w-[100%] h-[50%]">
                    <div className="max-sm:ml-0 flex flex-col ml-[20px]">
                        <p className="font-bold text-18px">Sannunez:</p>
                        <p className=" max-sm:text-[12px] text-[14px]">“My name is <span className="font-bold">Guilherme Santos Nunes</span>, I’m 20 years old, and entered as a Softwer Engineering Student at FIAP - PAULISTA (Computing and Adminstration Paulista College) in 2024”.</p>
                    </div>
                    <div className="max-sm:ml-0 ml-[20px] mt-2">
                        <div className="flex gap-2 items-center">
                            <p className="font-bold">study areas</p>
                            <hr className="max-md:w-[68%] max-sm:w-[60%] w-[35%] border-[4px] border-[#070707]" />
                            <p className="font-bold">X</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <SiJavascript className="size-[35px]"/>
                            <SiCss3 className="size-[35px]"/>
                            <SiHtml5 className="size-[35px]"/>
                            <SiPython className="size-[35px]"/>
                            <SiReact className="size-[35px]"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT BLOCK */}
            <div className="max-md:w-[425px] max-sm:w-[320px] flex flex-col gap-[20px] w-[50%] h-[550px]">
                <div className="max-sm:w-[320px] max-sm:pt-0 w-[90%] h-[30%] m-[0_auto] flex flex-col justify-center pt-7">
                    <h1 className="font-bold">Hobbies</h1>
                    <p className="text-[14px]">“I like to do a lot of things when I’m not studying, I can’t pass a day without listening to music, also I do apreciate playing some games like valorant, but one of my faborities hobbies is doing art”.</p>
                </div>
                <div className="w-[90%] m-[0_auto]">
                    <h1 className="max-md:ml-16 max-sm:ml-3 font-bold">checkout some of my artwork</h1>
                    <div className="overflow-y-scroll h-[70%]">
                        <div className="max-lg:grid-cols-[repeat(auto-fit,_100px)] max-lg:grid-rows-[150px_150px]  max-md:ml-3 max-md:grid-cols-[repeat(auto-fit,_110px)] max-md:grid-rows-[170px_170px] grid gap-4 grid-cols-[repeat(auto-fit,_130px)] grid-rows-[180px_180px]">
                            <div className="bg-[#d9d9d9] p-[5px] flex justify-center items-center"><img src="../src/assets/images/dgrid-1.png" alt="" className="w-[100%] h-[100%]"/></div>
                            <div className="bg-[#d9d9d9] p-[5px] flex justify-center items-center"><img src="../src/assets/images/dgrid-2.png" alt="" className="w-[100%] h-[100%]"/></div>
                            <div className="bg-[#d9d9d9] p-[5px] flex justify-center items-center"><img src="../src/assets/images/dgrid-3.png" alt="" className="w-[100%] h-[100%]"/></div>
                            <div className="bg-[#d9d9d9] p-[5px] flex justify-center items-center"><img src="../src/assets/images/dgrid-4.png" alt="" className="w-[100%] h-[100%]"/></div>
                            <div className="bg-[#d9d9d9] p-[5px] flex justify-center items-center"><img src="../src/assets/images/dgrid-5.png" alt="" className="w-[100%] h-[100%]"/></div>
                            <div className="bg-[#d9d9d9] p-[5px] flex justify-center items-center"><img src="../src/assets/images/dgrid-6.png" alt="" className="w-[100%] h-[100%]"/></div>
                        </div>
                    </div>
                    <div className='max-lg:mr-0 max-md:mr-0 max-sm:mr-0 flex items-center gap-2 p-[10px] mr-8'>
                        <div className="flex flex-col w-[45%] items-end">
                            <div className="w-[70%] h-[5px] bg-[#4A2499]"></div>
                        </div>
                        <img src="../src/assets/images/purple-heart.png" alt="PurpleHeart" className="max-lg:w-[25px] max-md:w-[25px] max-sm:w-[20px] w-[30px]"/>
                        <div className="flex flex-col w-[45%]">
                            <div className="w-[70%] h-[5px] bg-[#4A2499]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
     );
}
