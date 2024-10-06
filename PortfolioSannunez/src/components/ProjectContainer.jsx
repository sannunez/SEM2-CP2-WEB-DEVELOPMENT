export default function projectContainer({titulo, descricao, preview, programs}) {
    return ( 
        <>
        <div className="max-lg:flex-col max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center flex w-[100%] h-[100%] gap-5">
            <div className="max-lg:w-[70%] max-md:w-[100%] max-sm:w-[100%] flex flex-col justify-start items-center w-[40%]">
                <h1 className="max-lg:text-[12px] font-bold text-[18px] text-center">{titulo}</h1>
                <p className="max-lg:text-[10px] max-lg:mt-0 my-[15px] text-[16px] text-center w-[280px]">{descricao}</p>
                <hr className=' h-[8px] w-[80%] bg-[#070707] border-none'/>
                <div>
                <img src={programs} alt="Program" className="my-[10px]"/>
                </div>
            </div>
            <div className="max-lg:ml-[10px] max-lg:w-[220px] max-lg:h-[340px] flex justify-center w-[300px] h-[470px] p-[10px] bg-[url('../../src/assets/images/preview-deco.svg')] bg-cover bg-no-repeat bg-center">
                    <img src={preview} alt={titulo} className="w-[80%] h-[90%] mt-[20px] rounded-[15px]"/>
            </div>
        </div>
        </>
     );

     
}

