import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function Contact() {
    
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')

    const handleContact = (e) => {
        e.preventDefault()

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
        <body className="gap-10 max-w-[1024px] h-[90vh] mx-[auto] flex justify-center items-center">
            <div className='w-[45%] h-[70%] flex flex-col items-center'>
                <h1 className="font-koulen text-[78px] pl-[25px]">SANNUNEZ&lt;3</h1>
                <p className="text-[20px] font-bold w-[85%] text-center">Social Media:</p>
                <hr className="w-[85%] border-[4px] border-[#070707]"/>
                <div className="flex flex-col items-start justify-start w-[80%] gap-10 pt-[25px]">
                    <div className="flex gap-2 items-center  w-[70%]">
                        <a href="https://github.com/sannunez" target="_blank" className="flex items-center font-bold text-[18px] text-[#070707] grayscale brightness-0 hover:text-[#4A2499] transition duration(0.5s) gap-3 hover:grayscale-0 hover:brightness-100"><img src="../../src/assets/images/github.png" alt="Github" className="max-w-[50px]"/>sannunez</a>
                    </div>
                    <div className="flex gap-2 items-center justify-start w-[70%]">
                        <a href="https://www.instagram.com/sannunez.sz/" target="_blank" className="flex items-center font-bold text-[18px] text-[#4A2499] hover:text-[#070707]  hover:grayscale hover:brightness-0 transition duration(0.5s) gap-3"><img src="../../src/assets/images/instagram.png" alt="Instagram" className="max-w-[50px]"/>sannunez.sz</a>
                    </div>
                    <div className="flex gap-2 items-center justify-start">
                        <a href="mailto:sftwr.gsantosnunes@gmail.com?subject=Assunto&body=Mensagem" target="_blank" className="flex items-center font-bold text-[18px] text-[#070707] grayscale brightness-0 hover:text-[#4A2499] transition duration(0.5s) gap-3 hover:grayscale-0 hover:brightness-100"><img src="../../src/assets/images/gmail.png" alt="gmail" className="max-w-[50px]"/>sftwr.gsantosnunes@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="w-[45%] h-[70%] relative flex justify-center items-center">
                <img src="../../src/assets/images/form-deco.png" alt="form-decoration" className="absolute w-[100%] h-[100%] z-[-1]"/>
                <div className="bg-[#d9d9d9] w-[80%] h-[85%] rounded-[15px] flex justify-center items-center">
                    <form onSubmit={handleContact} className="flex flex-col w-[80%] max-h-[90%] gap-2">
                        <div className="flex flex-col">
                        <label htmlFor="name" className="font-bold">Name:</label>
                        <input 
                            type="text" 
                            id="name"
                            className='text-black text-[12px] rounded-[5px]'
                            value = {name}
                            onChange = {e => setName(e.target.value)}
                        />
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold">E-mail:</label>
                        <input 
                            type="email" 
                            id="email"
                            className='text-black text-[12px] rounded-[5px]'
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                        />
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="message" className="font-bold">Message:</label>
                        <textarea 
                            id="message"
                            cols = "30"
                            rows='10'
                            className="text-[12px] rounded-[5px]"
                            value= {message}
                            onChange = {e => setMessage(e.target.value)}
                       >
                       </textarea>
                       </div>

                       <button type="submit" className="bg-[#4A2499] hover:bg-[#070707] transition duration-[0.5s] mt-5 text-white p-2 mb-5 rounded-[5px] font-bold">send</button>
                    </form>

                </div>
            </div>
        </body>
    </> 
    );
}

// https://www.youtube.com/watch?v=Zbg1BHOVzRg