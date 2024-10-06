import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function Contact() {
    
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')

    const handleContact = (e) => {
        e.preventDefault()

    console.log(`
        Nome:${name}
        E-mail:${email}
        Mensagem:${message}
        `)

        if(name === '' || email === '' || message === ''){
            alert("Fill all fields")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_qbyaw9r', 'template_190uvbm', templateParams, 'VByX6kP-USRlLD_68')
        .then((response) => {
            console.log('EMAIL ENVIADO', response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) =>{
            console.log('ERRO: ', err)
        })
    }

    return ( 
    <>
        <main className="font-alternates max-lg:py-[150px] max-lg:w-[768px] max-md:flex-col max-md:gap-[50px] max-sm:flex-col max-sm:gap-[5px] max-w-[1024px] gap-10 mx-[auto] flex justify-center items-center overflow-auto py-[110px] my-[2%]">
            <div className='max-lg:w-[380px] max-md:w-[425px] max-sm:w-[320px] w-[45%] h-[70%] flex flex-col items-center'>
                <h1 className="max-lg:text-[64px] max-lg:pl-0 max-sm:text-[64px] max-sm:pl-0 font-koulen text-[78px] pl-[25px]">SANNUNEZ&lt;3</h1>
                <p className="text-[20px] font-bold w-[85%] text-center">Social Media:</p>
                <hr className="w-[85%] border-[4px] border-[#070707]"/>
                <div className="max-md:w-[85%] max-sm:w-[85%] flex flex-col items-start justify-start w-[80%] gap-10 pt-[25px]">
                    <div className="flex gap-2 items-center  w-[70%]">
                        <a href="https://github.com/sannunez" target="_blank" className="max-lg:text-[16px] max-sm:text-[14px] flex items-center font-bold text-[18px] text-[#070707] grayscale brightness-0 hover:text-[#4A2499] transition duration(0.5s) gap-3 hover:grayscale-0 hover:brightness-100"><img src="../../src/assets/images/github.png" alt="Github" className="max-lg:w-[40px] max-sm:w-[35px] max-w-[50px]"/>sannunez</a>
                    </div>
                    <div className="flex gap-2 items-center justify-start w-[70%]">
                        <a href="https://www.instagram.com/sannunez.sz/" target="_blank" className="max-lg:text-[16px] max-sm:text-[14px] flex items-center font-bold text-[18px] text-[#4A2499] hover:text-[#070707]  hover:grayscale hover:brightness-0 transition duration(0.5s) gap-3"><img src="../../src/assets/images/instagram.png" alt="Instagram" className="max-lg:w-[40px]  max-sm:w-[35px]  max-w-[50px]"/>sannunez.sz</a>
                    </div>
                    <div className="flex gap-2 items-center justify-start">
                        <a href="mailto:sftwr.gsantosnunes@gmail.com?subject=Assunto&body=Mensagem" target="_blank" className="max-lg:text-[16px] max-sm:text-[14px] flex items-center font-bold text-[18px] text-[#070707] grayscale brightness-0 hover:text-[#4A2499] transition duration(0.5s) gap-3 hover:grayscale-0 hover:brightness-100"><img src="../../src/assets/images/gmail.png" alt="gmail" className="max-lg:w-[40px] max-sm:w-[35px]  max-w-[50px]"/>sftwr.gsantosnunes@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="max-lg:w-[380px] max-lg:h-[450px] max-md:w-[425px] max-md:h-[500px] max-sm:w-[320px] max-sm:h-[450px] w-[512px] h-[512px] relative flex justify-center items-center bg-[url('../../src/assets/images/form-deco.svg')] bg-contain bg-no-repeat bg-center">
                <div className="max-lg:w-[75%] max-lg:h-[85%] max-md:w-[75%] max-md:h-[85%] max-sm:w-[80%] max-sm:h-[75%] w-[60%] h-[85%] bg-[#d9d9d9] rounded-[15px] flex justify-center items-center">
                    <form onSubmit={handleContact} className="flex flex-col w-[80%] max-h-[90%] gap-2">
                        <div className="flex flex-col">
                        <label htmlFor="name" className="max-sm:text-[12px] font-bold">Name:</label>
                        <input 
                            type="text" 
                            id="name"
                            className='text-black text-[12px] rounded-[5px]'
                            value = {name}
                            onChange = {e => setName(e.target.value)}
                        />
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="email" className="max-sm:text-[12px] font-bold">E-mail:</label>
                        <input 
                            type="email" 
                            id="email"
                            className='text-black text-[12px] rounded-[5px]'
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                        />
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="message" className="max-sm:text-[12px] font-bold">Message:</label>
                        <textarea 
                            id="message"
                            className="text-[12px] rounded-[5px] max-lg:h-[140px] max-md:h-[200px] max-sm:h-[150px] h-[200px]"
                            value= {message}
                            onChange = {e => setMessage(e.target.value)}
                       >
                       </textarea>
                       </div>

                       <button type="submit" className="max-sm:p-0 bg-[#4A2499] hover:bg-[#070707] transition duration-[0.5s] mt-5 text-white p-2 mb-5 rounded-[5px] font-bold">send</button>
                    </form>

                </div>
            </div>
        </main>
    </> 
    );
}

// https://www.youtube.com/watch?v=Zbg1BHOVzRg