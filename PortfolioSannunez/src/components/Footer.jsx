import { SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
    return ( 
        <>
            <footer className="font-alternates flex items-center w-[100%] h-[50px] fixed bottom-0 bg-[#070707] text-white z-20">
                <div className="max-sm:mx-[10px] flex justify-between items-center w-[100%] mx-[30px]">
                    <div className="flex gap-3">
                        <p className="font-bold items-center">made with:</p>
                        <SiReact className="size-[25px] animate-spinFooter"/>
                        <p className="font-bold">&</p>
                        <SiTailwindcss className="size-[25px]"/>
                    </div>
                    <div className="w-[45px] h-[35px] bg-[url('../src/assets/images/SannunezLogo-provisorio.png')] bg-cover bg-no-repeat bg-center"></div>
                </div>             
            </footer>
        </>
     );
}
