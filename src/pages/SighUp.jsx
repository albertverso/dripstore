import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";

export default function SighUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/v1/user/login', {
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
        <div className="flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px]">
            <div className='flex flex-row pt-10 gap-16 mt-10 items-center justify-center'>
                    <div className='flex flex-col bg-white w-[600px] rounded-md p-6 gap-4 mb-32'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-bold'>Criar Conta</p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className='flex flex-col gap-4 mb-5'>
                                 <div className='flex flex-col gap-4'>
                                    <label className='font-bold'>Nome Completo*</label>
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
                                    <label className='font-bold'>CPF *</label>
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
                                    <label className='font-bold'>Celular *</label>
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
                                    <label className='font-bold'>Email *</label>
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
                                        type="email" 
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                            </div>
                            <button type='submit' className='w-full mt-5 bg-pink-600 rounded-md p-2 font-bold text-white hover:bg-pink-900'>
                                Criar Conta
                            </button>
                            {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
                        </form>
                    </div>
            </div>
        </div>
    )
}