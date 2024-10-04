export default function AboutMe() {
    return ( 
        <>
        <body className="flex justify-between items-center max-w-[1024px] h-[90vh] mx-[auto]">
            {/* LEFT BLOCK */}
            <div className="flex flex-col w-[50%] h-[75%]">
                <div className="flex justify-between items-center w-[100%] h-[50%]">
                    <div className="w-[50%] h-[100%] relative flex items-center justify-center">
                        <img src="../../src/assets/images/myphoto-deco.png" alt="form-decoration" className="absolute w-[100%] h-[100%]"/>
                        <div className="h-[75%] w-[70%] mt-3 bg-[#4A2499] rounded-[15px]">

                        </div>
                    </div>
                    <div className="w-[50%]">
                        <p className="font-bold text-16px">Objetcives n' Goals:</p>
                                <ol className="text-[12px] list-disc ml-[20px]">
                                    <li>looking for job and internship opportunities</li>
                                    <li>acquire experience</li>
                                    <li>contribute positively to IT Area</li>
                                </ol>
                        <p className="text-[12px] mt-2">"I aspire to someday be a fullstack developer, because both areas (front and back-end) had fascinated me, and I couldn’t choose only one"</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-2 mt-[30px] w-[100%] h-[50%]">
                    <div className="flex flex-col ml-[20px]">
                        <p className="font-bold text-18px">Sannunez:</p>
                        <p className="text-[14px]">“My name is <span className="font-bold">Guilherme Santos Nunes</span>, I’m 20 years old, and entered as a Softwer Engineering Student at FIAP - PAULISTA (Computing and Adminstration Paulista College) in 2024”.</p>
                    </div>
                    <div className="ml-[20px] mt-2">
                        <div className="flex gap-2 items-center">
                            <p className="font-bold">study areas</p>
                            <hr className="w-[35%] border-[4px] border-[#070707]" />
                            <p className="font-bold">X</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <img src="../../src/assets/images/JavaScript.png" alt="JavaScript" />
                            <img src="../../src/assets/images/CSS.png" alt="CSS" />
                            <img src="../../src/assets/images/HTML.png" alt="HTML" />
                            <img src="../../src/assets/images/python.png" alt="PYTHOn" />
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* RIGHT BLOCK */}
            <div className="flex w-[48%] h-[75%] bg-[#d9d9d9]"></div>
        </body>
        </>
     );
}
