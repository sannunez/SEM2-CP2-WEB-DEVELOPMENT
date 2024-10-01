export default function Menu() {
    return ( 
    <>
        <body className="flex flex-col justify-center items-center mw-[1024px] my-[30px] mx-[auto]">
            <div className="flex flex-col items-center">
                <div className="flex h-[50px] items-center gap-[5px]">
                    <div className="flex flex-col w-[100w] gap-[3px] items-end pt-[23px]">
                        <div className="w-[60px] h-[6px] bg-[#070707]"></div>
                        <div className="w-[100px] h-[6px] bg-[#070707]"></div>
                    </div>
                    <h1 className="font-koulen text-[64px]">SANNUNEZ&lt;3</h1>
                    <div className="flex flex-col w-[100w] gap-[3px] pt-[23px]">
                        <div className="w-[60px] h-[6px] bg-[#070707]"></div>
                        <div className="w-[100px] h-[6px] bg-[#070707]"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[32px]">my friends call me <span className="text-[#4A2499]">San</span>, <span className="text-[#4A2499]">Nunez</span>, <span className="text-[#4A2499]">Gui</span>.</h2>
                    <p>feel free to use wichever you want</p>
                </div>
            </div>
            <div className= "grid grid-cols-[150px_150px_150px_150px] grid-rows-[300px_200px] gap-4 max-w-[600px]">
                <div className="bg-blue-200 p-4">Item 1</div>
                <div className="bg-blue-200 p-4">Item 2</div>
                <div className="bg-blue-200 p-4">Item 3</div>
                <div className="bg-blue-200 p-4">Item 4</div>
                <div className="col-start-2 row-start-2 bg-blue-200 p-4">Item 5</div>
                <div className="col-start-3 row-start-2 bg-blue-200 p-4">Item 6</div>
                
            </div>
        </body>
    </> );
}