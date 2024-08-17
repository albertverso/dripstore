import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import '../style/Login.css'
import tenis from '../assets/loginTenis.svg';
import gmail from '../assets/gmail.svg'
import face from '../assets/faceColor.svg'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const apiUrl = import.meta.env.VITE_API;

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            console.log(apiUrl+'/v1/user/login')

            const response = await fetch(apiUrl+'/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                localStorage.setItem('userEmail', email);
                navigate('/Home');
                // Faça algo com os dados, como salvar o token de autenticação
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Falha no login. Verifique suas credenciais e tente novamente.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
        }
    };
    
    return(
        <div className="bg-gradiente-login flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px]">
            <div className='flex flex-row pt-10 gap-16 mt-10'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col bg-white w-[600px] rounded-md p-6 gap-4 mb-32'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-bold'>Acesse sua conta</p>
                            <p>Novo cliente? Então registre-se <a className=' underline' href="">aqui</a></p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className='flex flex-col gap-4 mb-5'>
                                <div className='flex flex-col gap-4'>
                                    <label className='font-bold'>Login *</label>
                                    <input 
                                        className='focus:outline-pink-600 text-black bg-slate-200 p-2 rounded-md' 
                                        type="email" 
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <label className='font-bold'>Senha *</label>
                                    <input 
                                        className='focus:outline-pink-600 text-black bg-slate-200 p-2 rounded-md'
                                        type="password"
                                        placeholder="Senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                     />
                                </div>
                            </div>
                            <a href="" className='underline'>Esqueci minha senha</a>
                            <button type='submit' className='w-full mt-5 bg-pink-600 rounded-md p-2 font-bold text-white hover:bg-pink-900'>
                                Acessar Conta
                            </button>
                            {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
                        </form>

                        <div className='flex flex-row items-center justify-center gap-5'>
                            <p>Ou faça login com</p>
                            <a href="">
                                <img src={gmail} alt="" />
                            </a>
                            <a href="">
                                <img src={face} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={tenis} alt=""  height={600} className=' relative bottom-10'/>
                </div>
            </div>
        </div>
    )
}