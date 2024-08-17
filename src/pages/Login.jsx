import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import '../style/Login.css'
import tenis from '../assets/loginTenis.svg';
import gmail from '../assets/gmail.svg'
import face from '../assets/faceColor.svg'
import { ArrowClockwise } from 'react-bootstrap-icons';
import { authLogin, isAuthenticated } from '../services/authService';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
        const data = await authLogin(email, password);
        if (isAuthenticated) {
            console.log('Login bem-sucedido:', data);
            localStorage.setItem('userEmail', email);
            navigate('/Home');
        } else {
            setErrorMessage(data.message);
        }
        } catch (error) {
        setErrorMessage(error.message);
        } finally {
        setLoading(false);
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
                            <button type='submit' disabled={loading} className={`w-full mt-5 bg-pink-600 rounded-md p-2 font-bold text-white hover:bg-pink-900 ${loading && 'cursor-not-allowed'}`}>
                            {loading ? (
                                <span className="flex items-center text-light justify-center">
                                    <div className="animate-spin text-light mr-3">
                                        <ArrowClockwise/>
                                    </div>
                                    Carregando...
                                </span>
                                ) : (
                                'Acessar Conta'
                                )}
                            </button>
                            {errorMessage && <p className='mt-5 text-pink-600 text-lg text-center animate-pulse'>{errorMessage}</p>}
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